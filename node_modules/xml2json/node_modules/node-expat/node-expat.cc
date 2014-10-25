#include <nan.h>
extern "C" {
#include <expat.h>
}

using namespace v8;
using namespace node;

class Parser : public ObjectWrap {
public:
  static void Initialize(Handle<Object> target)
  {
    NanScope();
    Local<FunctionTemplate> t = NanNew<FunctionTemplate>(New);

    t->InstanceTemplate()->SetInternalFieldCount(1);

    NODE_SET_PROTOTYPE_METHOD(t, "parse", Parse);
    NODE_SET_PROTOTYPE_METHOD(t, "setEncoding", SetEncoding);
    NODE_SET_PROTOTYPE_METHOD(t, "setUnknownEncoding", SetUnknownEncoding);
    NODE_SET_PROTOTYPE_METHOD(t, "getError", GetError);
    NODE_SET_PROTOTYPE_METHOD(t, "stop", Stop);
    NODE_SET_PROTOTYPE_METHOD(t, "resume", Resume);
    NODE_SET_PROTOTYPE_METHOD(t, "reset", Reset);
    NODE_SET_PROTOTYPE_METHOD(t, "getCurrentLineNumber", GetCurrentLineNumber);
    NODE_SET_PROTOTYPE_METHOD(t, "getCurrentColumnNumber", GetCurrentColumnNumber);
    NODE_SET_PROTOTYPE_METHOD(t, "getCurrentByteIndex", GetCurrentByteIndex);

    target->Set(NanNew("Parser"), t->GetFunction());
  }

protected:
  /*** Constructor ***/

  static NAN_METHOD(New)
  {
    NanScope();
    XML_Char *encoding = NULL;
    if (args.Length() == 1 && args[0]->IsString())
      {
        encoding = new XML_Char[32];
        NanRawString(args[0], Nan::ASCII, NULL, encoding, 32, 0);
      }

    Parser *parser = new Parser(encoding);
    if (encoding)
      delete[] encoding;
    parser->Wrap(args.This());
    NanReturnValue(args.This());
  }

  Parser(const XML_Char *encoding)
    : ObjectWrap()
  {
    parser = XML_ParserCreate(encoding);
    assert(parser != NULL);

    attachHandlers();
  }

  ~Parser()
  {
    XML_ParserFree(parser);
  }

  void attachHandlers()
  {
    XML_SetUserData(parser, this);
    XML_SetElementHandler(parser, StartElement, EndElement);
    XML_SetCharacterDataHandler(parser, Text);
    XML_SetCdataSectionHandler(parser, StartCdata, EndCdata);
    XML_SetProcessingInstructionHandler(parser, ProcessingInstruction);
    XML_SetCommentHandler(parser, Comment);
    XML_SetXmlDeclHandler(parser, XmlDecl);
    XML_SetEntityDeclHandler(parser, EntityDecl);
    XML_SetUnknownEncodingHandler(parser, UnknownEncoding, this);
  }
    
  /*** parse() ***/

  static NAN_METHOD(Parse)
  {
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());
    NanScope();
    Local<String> str;
    int isFinal = 0;

    /* Argument 2: isFinal :: Bool */
    if (args.Length() >= 2)
      {
        isFinal = args[1]->IsTrue();
      }

    /* Argument 1: buf :: String or Buffer */
    if (args.Length() >= 1 && args[0]->IsString())
      {
        str = args[0]->ToString();
        NanReturnValue(parser->parseString(**str, isFinal) ? NanTrue() : NanFalse());
      }
    else if (args.Length() >= 1 && args[0]->IsObject())
      {
        Local<Object> obj = args[0]->ToObject();
        if (Buffer::HasInstance(obj))
        {
          NanReturnValue(parser->parseBuffer(obj, isFinal) ? NanTrue() : NanFalse());
        }
        else
        {
          NanThrowTypeError("Parse buffer must be String or Buffer");
          NanReturnUndefined();
        }
      }
    else {
      NanThrowTypeError("Parse buffer must be String or Buffer");
      NanReturnUndefined();
    }
  }

  /** Parse a v8 String by first writing it to the expat parser's
      buffer */
  bool parseString(String &str, int isFinal)
  {
    int len = str.Utf8Length();
    if (len == 0)
      return true;

    void *buf = XML_GetBuffer(parser, len);
    assert(buf != NULL);
    assert(str.WriteUtf8(static_cast<char *>(buf), len) == len);

    return XML_ParseBuffer(parser, len, isFinal) != XML_STATUS_ERROR;
  }

  /** Parse a node.js Buffer directly */
  bool parseBuffer(Local<Object> buffer, int isFinal)
  {
    return XML_Parse(parser, Buffer::Data(buffer), Buffer::Length(buffer), isFinal) != XML_STATUS_ERROR;
  }

  /*** setEncoding() ***/

  static NAN_METHOD(SetEncoding)
  {
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());
    NanScope();

    if (args.Length() == 1 && args[0]->IsString())
      {
        XML_Char *encoding = new XML_Char[32];
        NanRawString(args[0], Nan::ASCII, NULL, encoding, 32, 0);

        int status = parser->setEncoding(encoding);

        delete[] encoding;

        NanReturnValue(status ? NanTrue() : NanFalse());
      }
    else
      NanReturnValue(NanFalse());
  }

  int setEncoding(XML_Char *encoding)
  {
    return XML_SetEncoding(parser, encoding) != 0;
  }

  /*** getError() ***/

  static NAN_METHOD(GetError)
  {
    NanScope();
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());

    const XML_LChar *error = parser->getError();
    if (error)
      NanReturnValue(NanNew(error));
    else
      NanReturnValue(NanNull());
  }
  
  /*** stop() ***/

  static NAN_METHOD(Stop)
  {
    NanScope();
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());

    int status = parser->stop();
    
    NanReturnValue(status ? NanTrue() : NanFalse());
  }

  int stop()
  {
    return XML_StopParser(parser, XML_TRUE) != 0;
  }
  
  /*** resume() ***/

  static NAN_METHOD(Resume)
  {
    NanScope();
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());

    int status = parser->resume();
    
    NanReturnValue(status ? NanTrue() : NanFalse());
  }

  int resume()
  {
    return XML_ResumeParser(parser) != 0;
  }
  
  static NAN_METHOD(Reset)
  {
    NanScope();
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());
    XML_Char *encoding = NULL;
    if (args.Length() == 1 && args[0]->IsString())
      {
        encoding = new XML_Char[32];
        NanRawString(args[0], Nan::ASCII, NULL, encoding, 32, 0);
      }

    int status = parser->reset(encoding);
    if (status) 
      parser->attachHandlers();
    NanReturnValue(status ? NanTrue() : NanFalse());
  }

  int reset(XML_Char *encoding)
  {
      return XML_ParserReset(parser, encoding) != 0;
  }
  const XML_LChar *getError()
  {
    enum XML_Error code;
    code = XML_GetErrorCode(parser);
    return XML_ErrorString(code);
  }

  static NAN_METHOD(GetCurrentLineNumber)
  {
    NanScope();
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());

    NanReturnValue(NanNew(parser->getCurrentLineNumber()));
  }

  uint32_t getCurrentLineNumber()
  {
    return XML_GetCurrentLineNumber(parser);
  }

  static NAN_METHOD(GetCurrentColumnNumber)
  {
    NanScope();
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());

    NanReturnValue(NanNew(parser->getCurrentColumnNumber()));
  }

  uint32_t getCurrentColumnNumber()
  {
    return XML_GetCurrentColumnNumber(parser);
  }

  static NAN_METHOD(GetCurrentByteIndex)
  {
    NanScope();
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());

    NanReturnValue(NanNew(parser->getCurrentByteIndex()));
  }

  int32_t getCurrentByteIndex()
  {
    return XML_GetCurrentByteIndex(parser);
  }

private:
  /* expat instance */
  XML_Parser parser;

  /* no default ctor */
  Parser();
        
  /*** SAX callbacks ***/
  /* Should a local HandleScope be used in those callbacks? */

  static void StartElement(void *userData,
                           const XML_Char *name, const XML_Char **atts)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(userData);

    /* Collect atts into JS object */
    Local<Object> attr = NanNew<Object>();
    for(const XML_Char **atts1 = atts; *atts1; atts1 += 2)
      attr->Set(NanNew(atts1[0]), NanNew(atts1[1]));

    /* Trigger event */
    Handle<Value> argv[3] = { NanNew("startElement"),
                              NanNew(name),
                              attr };
    parser->Emit(3, argv);
  }

  static void EndElement(void *userData,
                         const XML_Char *name)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(userData);

    /* Trigger event */
    Handle<Value> argv[2] = { NanNew("endElement"), NanNew(name) };
    parser->Emit(2, argv);
  }
  
  static void StartCdata(void *userData)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(userData);

    /* Trigger event */
    Handle<Value> argv[1] = { NanNew("startCdata") };
    parser->Emit(1, argv);
  }

  static void EndCdata(void *userData)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(userData);

    /* Trigger event */
    Handle<Value> argv[1] = { NanNew("endCdata") };
    parser->Emit(1, argv);
  }

  static void Text(void *userData,
                   const XML_Char *s, int len)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(userData);

    /* Trigger event */
    Handle<Value> argv[2] = { NanNew("text"),
                              NanNew(s, len) };
    parser->Emit(2, argv);
  }

  static void ProcessingInstruction(void *userData,
                                    const XML_Char *target, const XML_Char *data)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(userData);

    /* Trigger event */
    Handle<Value> argv[3] = { NanNew("processingInstruction"),
                              NanNew(target),
                              NanNew(data) };
    parser->Emit(3, argv);
  }

  static void Comment(void *userData,
                      const XML_Char *data)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(userData);

    /* Trigger event */
    Handle<Value> argv[2] = { NanNew("comment"), NanNew(data) };
    parser->Emit(2, argv);
  }

  static void XmlDecl(void *userData,
                      const XML_Char *version, const XML_Char *encoding,
                      int standalone)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(userData);

    /* Trigger event */
    Local<Value> argv[4];

                    argv[0] = NanNew("xmlDecl");
    if (version)    argv[1] = NanNew(version);
    else            argv[1] = NanNull();
    if (encoding)   argv[2] = NanNew(encoding);
    else            argv[2] = NanNull();
    if (standalone) argv[3] = NanTrue();
    else            argv[3] = NanFalse();

    parser->Emit(4, argv);
  }

  static void EntityDecl(void *userData, const XML_Char *entityName, int is_parameter_entity,
                         const XML_Char *value, int value_length, const XML_Char *base,
                         const XML_Char *systemId, const XML_Char *publicId, const XML_Char *notationName)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(userData);

    /* Trigger event */
    Local<Value> argv[8];

                             argv[0] = NanNew("entityDecl");
    if (entityName)          argv[1] = NanNew(entityName);
    else                     argv[1] = NanNull();
    if (is_parameter_entity) argv[2] = NanTrue();
    else                     argv[2] = NanFalse();
    if (value)               argv[3] = NanNew(value, value_length);
    else                     argv[3] = NanNull();
    if (base)                argv[4] = NanNew(base);
    else                     argv[4] = NanNull();
    if (systemId)            argv[5] = NanNew(systemId);
    else                     argv[5] = NanNull();
    if (publicId)            argv[6] = NanNew(publicId);
    else                     argv[6] = NanNull();
    if (notationName)        argv[7] = NanNew(notationName);
    else                     argv[7] = NanNull();

    parser->Emit(8, argv);
  }

  XML_Encoding *xmlEncodingInfo;

  static int UnknownEncoding(void *encodingHandlerData, const XML_Char *name, XML_Encoding *info)
  {
    NanScope();
    Parser *parser = reinterpret_cast<Parser *>(encodingHandlerData);

    /* Trigger event */
    parser->xmlEncodingInfo = info;
    Local<Value> argv[2];

              argv[0] = NanNew("unknownEncoding");
    if (name) argv[1] = NanNew(name);
    else      argv[1] = NanNull();

    parser->Emit(2, argv);

    /* Did no event handler invoke setUnknownEncoding()? */
    if (parser->xmlEncodingInfo) {
      parser->xmlEncodingInfo = NULL;
      return XML_STATUS_ERROR;
    } else {
      return XML_STATUS_OK;
    }
  }

  /**
   * Fills xmlEncodingInfo
   */
  static NAN_METHOD(SetUnknownEncoding)
  {
    Parser *parser = ObjectWrap::Unwrap<Parser>(args.This());
    NanScope();

    if (!parser->xmlEncodingInfo)
      NanThrowError("setUnknownEncoding() must be synchronously invoked from an unknownEncoding event handler");

    if (args.Length() >= 1 && args[0]->IsArray()) {
      Local<Array> map = args[0].As<Array>();
      /* Copy map */
      for(int i = 0; i < 256; i++) {
        Local<Value> m = map->Get(NanNew(i));
        if (m->IsInt32())
          parser->xmlEncodingInfo->map[i] = m->Int32Value();
        else
          NanThrowTypeError("UnknownEncoding map must consist of 256 ints");
      }
    } else
      NanThrowTypeError("SetUnknownEncoding expects a map array");

    parser->xmlEncodingInfo = NULL;
    NanReturnUndefined();
  }

  void Emit(int argc, Handle<Value> argv[])
  {
    NanScope();

    Handle<Object> handle = NanObjectWrapHandle(this);
    Local<Function> emit = handle->Get(NanNew("emit")).As<Function>();
    emit->Call(handle, argc, argv);
  }
};

extern "C" {
  static void init (Handle<Object> target)
  {
    Parser::Initialize(target);
  }
  //Changed the name cause I couldn't load the module with - in their names
  NODE_MODULE(node_expat, init);
};


import IsDominos from '../../utils/DominosTypes.js';
import {Store} from '../../modules/Store.js';
import {NearbyStores} from '../../modules/NearbyStores.js';

const isDominos=new IsDominos;

const testStore=async function(test,storeID,lang){
    try{
        test.expects(`Store class to Populate store.info and store.menu for Store id of ${JSON.stringify(storeID)} with a language of ${lang}`);    
        
        const store=await new Store(storeID,lang);
        
        //confirm Store class creation as expected
        isDominos.store(store);
        isDominos.menu(store.menu);
        
        //test the expected format after completion
        test.is.object(store.info);

        //console.dir(store.info,{depth:1});
        //console.dir(store.menu.Misc,{depth:1});

        //test a smattering of the expected values
        test.is.string(store.info.StoreID);
        test.is.string(store.info.BusinessDate);
        test.is.string(store.info.Phone);
        test.is.string(store.info.StreetName);
        test.is.string(store.info.City);

        //confirm it was the right store that got populated
        test.compare(
            storeID,
            store.info.StoreID,
            `storeID of ${storeID} to match store.info.StoreID of ${store.info.StoreID}`
        );

        //test a smattering of the dominos menu categories for existance and format
        test.is.object(store.menu.dominosAPIResponse.Misc);
        test.is.object(store.menu.dominosAPIResponse.Categorization);
        test.is.object(store.menu.dominosAPIResponse.Products);
        test.is.object(store.menu.dominosAPIResponse.Toppings);
        test.is.object(store.menu.dominosAPIResponse.PreconfiguredProducts);

        //test a smattering of the PARSED menu categories for existance and format
        test.is.object(store.menu.menu.categories.food.pizza);
        test.is.object(store.menu.menu.categories.food.drinks);
        test.is.object(store.menu.menu.preconfiguredProducts.XC_14SCREEN);
        
        //test that the dominos was for the right store
        test.compare(
            storeID,
            store.menu.dominosAPIResponse.Misc.StoreID,
            `storeID of ${storeID} to match store.menu.dominosAPIResponse.Misc.StoreID of ${store.menu.dominosAPIResponse.Misc.StoreID}`
        );

        //test that the dominos for the correct language if it was provided
        if(lang){
            //console.log(`dominos LanguageCode to be ${lang} and got a LanguageCode of ${store.menu.dominosAPIResponse.Misc.LanguageCode}`)
            test.compare(
                lang,
                store.menu.dominosAPIResponse.Misc.LanguageCode,
                `store.menu.dominosAPIResponse LanguageCode to be ${lang} but got a LanguageCode of ${store.menu.dominosAPIResponse.Misc.LanguageCode}`
            );
        }

    }catch(err){
        console.trace(err);
        test.fail();
    }
    test.pass();
    test.done();
}

const storeShouldFailToInit=async function(test,storeID){
    try{
        test.expects(`Store class should throw a reference error when provided an invalid id type (not a number|string) of: ${JSON.stringify(storeID)}`);    
        
        const store=await new Store(storeID);
        
        test.fail();

        //allow transparency
        isDominos.undefined(store);
    }catch(err){
        try{
            isDominos.referenceError(err);
        }catch(err){
            console.trace(err);
            test.fail();
        }

        console.trace(err);        
    }
    test.pass();
    test.done(); 
}

const expectNoStore=async function(test,storeID){
    try{
        test.expects(`Store class to Throw an error for an invalid Store id of ${JSON.stringify(storeID)}`);    
        
        const store=await new Store(storeID);
        
        test.fail();

        //allow transparency
        isDominos.undefined(store);
    }catch(err){
        try{
            console.log(err);
            isDominos.fetchError(err);
            console.trace(err);
        }catch(err){
            console.trace(err);
            test.fail();
        }                
    }
    test.pass();
    test.done();
}



const runTest=async function(test){
    //sadly we can not test language support because even when we request ES, the menu and other info is still returned in EN

    const nearby=await new NearbyStores('92101');
    
    //for use with next test
    let storeID=Number(nearby.stores[0].StoreID);
    let lang='en';

    // Store class to Populate store.info and store.menu for StoreID from nearbyStore request when omitting lang
    await testStore(test,storeID);

    // Store class to Populate store.info and store.menu for StoreID from nearbyStore request in en
    await testStore(test,storeID,lang);

    lang='es';
    // Store class to Populate store.info and store.menu for StoreID from nearbyStore request in es
    await testStore(test,storeID,lang);
    
    //force storeID to string
    storeID+='';

    // Store class to Populate store.info and store.menu for StoreID from nearbyStore request in es note storeID is a string here
    await testStore(test,storeID,lang);

    // Store class throw error without correct type of storeID as String or Number
    await storeShouldFailToInit(test);
    await storeShouldFailToInit(test,{});
    await storeShouldFailToInit(test,null);
    await storeShouldFailToInit(test,true);
    
    storeID=3;

    // Store class to have empty information for a bad storeID
    await expectNoStore(test,storeID);
    
}

export {
    runTest as default,
    runTest
}
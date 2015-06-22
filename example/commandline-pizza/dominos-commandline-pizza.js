var fs          = require('fs'),
    path        = require('path'),
    readline    = require('readline'),
    colors      = require('colors'),
    pizzapi     = require('../../dominos-pizza-api.js');

colors.setTheme(
    {
        menuItem    : 'bgCyan',
        menuTitle   : 'bgBlue',
        store       : 'bgBlue',
        info        : 'cyan'
    }
);

var rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
        terminal:true
    }
);
process.stdin.setEncoding('utf8');

readline.cursorTo(process.stdout, 0, 0);
readline.clearScreenDown(process.stdout);

rl.setPrompt('Pizza> ');
rl.prompt();

var order=new pizzapi.Order(

);

rl.on(
    'line',
    function(chunk) {
        chunk=chunk.trim();

        if (chunk !== null) {
            chunk = chunk.replace( /\s\s+/g, ' ' ).trim();

            var data = chunk.toLowerCase();

            if(data.indexOf('find near ')>-1){
                findStores(data.slice(10));
                return;
            }

            if(data.indexOf('find closest ')>-1){
                findStores(data.slice(data.indexOf('find closest ')+13),true);
                return;
            }

            if(data.indexOf('full menu for closest')>-1){
                findStores(data.slice(data.indexOf('full menu for closest')+21),true,false,true);
                return;
            }

            if(data.indexOf('menu for closest')>-1){
                findStores(data.slice(data.indexOf('menu for closest')+16),true,true);
                return;
            }

            if(data.indexOf('full menu for ')>-1){
                showMenu(data.slice(data.indexOf('full menu for ')+14));
                return;
            }

            if(data.indexOf('menu for ')>-1){
                showMenu(data.slice(data.indexOf('menu for ')+9),true);
                return;
            }

            if(data.indexOf('order ')>-1){
                orderPizza(data.slice(data.indexOf('order ')+6),true);
                return;
            }

            if(data.indexOf('help')>-1){
                help();
                return;
            }

            rl.prompt();
        }
    }
);

function help(){
    var commands=[
        'find closest'.bgCyan+' {address info}'.info+' //can be full address city and state, postal code etc...',
        'find near'.bgCyan+' {address info}'.info+' //can be full address city and state, postal code etc...',
        'menu for closest'.bgCyan+' {address info}'.info+' //can be full address city and state, postal code etc...',
        'full menu for closest'.bgCyan+' {address info}'.info+' //can be full address city and state, postal code etc...',
        'menu for'.bgCyan+' {storeID}'.info+' //get store id as part of a find closest or find near request',
        'full menu for'.bgCyan+' {storeID}'.info+' //get store id as part of a find closest or find near request',
        'order'.bgCyan+' {comma deliminated list of item codes}'.info+' //get item codes from menu'
    ];

    for(var i in commands){
        console.log(commands[i]+'\n');
    }
}


/*
 * pass in pizza info
 *
 */


function showMenu(storeID,quick){
    console.log('Fetching menu for '+storeID.info+'...');
    order.StoreID=storeID
    rl.prompt();

    var store=new pizzapi.Store(
        {
            ID:storeID
        }
    );

    store.getMenu(
        function(data){
            if(quick){
                console.log(
                    '\n##########################\n'.blue,
                    'Quick Menu'.yellow,
                    '\n##########################\n'.blue
                );
                for(var i in data.result.PreconfiguredProducts){
                    var product=data.result.PreconfiguredProducts[i];
                    console.log(
                        '\n'.blue+
                        (
                            (
                                product.Name.bold+' : '+
                                product.Code+'\n'
                            ).menuTitle+
                            product.Description+'\n'+
                            product.Size
                        ).menuItem.white
                    );
                };

                rl.prompt();
                return;
            }

            console.log(
                '\n##########################\n'.blue,
                'Full Menu'.yellow,
                '\n##########################\n'.blue
            );

            var menuPortions=[
                'Sides',
                'PreconfiguredProducts',
                'Products'
            ];

            for(var j in menuPortions){
                for(var i in data.result[menuPortions[j]]){
                    if(!data.result[menuPortions[j]][i].Name){
                        console.log(
                            (
                                '=========='.cyan+
                                i.blue+
                                '=========='.cyan
                            ).bgYellow
                        );

                        for(var k in data.result[menuPortions[j]][i]){
                            var product=data.result[menuPortions[j]][i][k];
                            console.log(
                                '(+)'+(
                                    (
                                        product.Name.bold+' : '+
                                        product.Code+'\n'
                                    ).menuTitle+
                                    product.Description+'\n'+
                                    product.Size
                                ).menuItem.white
                            );
                        }
                        continue;
                    }
                    var product=data.result[menuPortions[j]][i];
                    console.log(
                        '(+)'+(
                            (
                                product.Name.bold+' : '+
                                product.Code+'\n'
                            ).menuTitle+
                            product.Description+'\n'+
                            product.Size
                        ).menuItem.white
                    );
                };
            }
        }
    );
}

function validateAddress(address){
    console.log(address);
    pizzapi.store.find(
        address,
        function(storeData){
            order.Address=storeData.result.Address;
            if(!order.Address.Street){
                rl.question(
                    'Not a valid address.'.red+' What is the full address for delivery?',
                    validateAddress
                );
                return;
            }

            validateOrder(order);
        }
    );
}

function findStores(address, closest, menu, fullMenu){
    console.log('Looking for stores near '+address.info+'...');
    rl.prompt();

    pizzapi.Util.findNearbyStores(
        address,
        'Delivery',
        function(storeData){
            var openStores=[];
            order.Address=new pizzapi.Address(storeData.result.Address);

            for(var i in storeData.result.Stores){
                if(storeData.result.Stores[i].IsOpen &&
                    storeData.result.Stores[i].IsOnlineNow &&
                    storeData.result.Stores[i].ServiceIsOpen.Delivery
                ){
                    openStores.push(storeData.result.Stores[i]);
                }
            }

            if(openStores.length<1){
                console.log('No Open Stores allowing delivery right now for the specified location'.bgRed.black.bold);
                return;
            }

            var count=openStores.length;

            if(closest){
                count=1;
                order.StoreID=openStores[0].StoreID
            }
            console.log('\n');
            for(var i=0; i<count; i++){
                var store=openStores[i];

                console.log(
                    '###############################################################\n'.blue+
                    (
                        'StoreID : '+store.StoreID.bold+
                        '\nAddress : '+store.AddressDescription+
                        '\nPhone : '+store.Phone+
                        '\nDelivery Hours : '+store.ServiceHoursDescription.Delivery
                    ).store.white
                );
            }

            rl.prompt();

            if(!menu && !fullMenu)
                return;

            if(menu){
                showMenu(
                    openStores[0].StoreID,
                    true
                );
                return;
            }

            if(fullMenu){
                showMenu(
                    openStores[0].StoreID
                );
                return;
            }
        }
    );
}

function orderPizza(items){
    var items=items.split(',');
    for(var i=0; i<items.length; i++){
        //create a new product to add to the order
        var product=new pizzapi.Product();

        //set the product code using the random item key
        product.Code=items[i].trim();

        //add the item to the order
        order.Products.push(product);
    }

    if(!order.Address.Street){
        rl.question(
            'what is the full address for delivery?',
            validateAddress
        );
        return;
    }

    validateOrder();
}

function validateOrder(){
    if(!order.FirstName){
        rl.question(
            'First Name?',
            function(data){
                order.FirstName=data;
                validateOrder();
            }
        );
        return;
    }

    if(!order.LastName){
        rl.question(
            'Last Name?',
            function(data){
                order.LastName=data;
                validateOrder();
            }
        );
        return;
    }

    if(!order.Email){
        rl.question(
            'E-Mail?',
            function(data){
                order.Email=data;
                validateOrder();
            }
        );
        return;
    }

    if(!order.Phone){
        rl.question(
            'Phone number?',
            function(data){
                order.Phone=data;
                validateOrder();
            }
        );
        return;
    }

    if(!order.Phone){
        rl.question(
            'Phone number?',
            function(data){
                order.Phone=data;
                validateOrder();
            }
        );
        return;
    }

    pizzapi.order.validate(
        order,
        validatedOrder
    );
}

function validatedOrder(data){
    order=orderData.result;

    pizzapi.order.price(
        order,
        pricedOrder
    );
}

function pricedOrder(priceData) {
    console.log(priceData.result.Order.Amounts);

    var cardInfo = new pizzapi.Payment();
    cardInfo.Amount = priceData.result.Order.Amounts.Customer;
    order.Payments.push(cardInfo);

    placeOrder();
}

function validateCC(number){
    var re = {
        visa        : /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard  : /^5[1-5][0-9]{14}$/,
        amex        : /^3[47][0-9]{13}$/,
        diners      : /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        discover    : /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        jcb         : /^(?:2131|1800|35\d{3})\d{11}$/,
        enroute     : /^(?:2014|2149)\d{11}$/
    };

    if (re.visa.test(number))
        return 'VISA';

    if (re.mastercard.test(number))
        return 'MASTERCARD';

    if (re.amex.test(number))
        return 'AMEX';

    if (re.diners.test(number))
        return 'DINERS';

    if (re.discover.test(number))
        return 'DISCOVER';

    if (re.jcb.test(number))
        return 'JCB';

    if (re.enroute.test(number))
        return 'JCB';

    return "";
}

function placeOrder(){
    if(!order.Payments[0].Number){
        rl.question(
            'Credit Card Number?',
            function(data){
                order.Payments[0].Number = data;
                order.Payments[0].CardType = validateCC(data);
                placeOrder();
            }
        );
        return;
    }

    if(!order.Payments[0].Expiration){
        rl.question(
            'Credit Card Expiration?',
            function(data){
                order.Payments[0].Expiration = data.replace(/\D/g,'');
                placeOrder();
            }
        );
        return;
    }

    if(!order.Payments[0].SecurityCode){
        rl.question(
            'Credit Card Security Code or CVV (3 or 4 digit code on card)?',
            function(data){
                order.Payments[0].SecurityCode = data;
                placeOrder();
            }
        );
        return;
    }

    if(!order.Payments[0].PostalCode){
        rl.question(
            'Postal Code?',
            function(data){
                order.Payments[0].PostalCode = data;
                placeOrder();
            }
        );
        rl.write(order.Address.PostalCode);
        return;
    }

    pizzapi.order.place(order, orderPlaced);
}

function orderPlaced(data){
    order=data.result;
    if(orderData.result.Order.Status==-1){
        console.log(order.CorrectiveAction);
        rl.prompt();
        return;
    }

    trackOrder();
}

function trackOrder(){
    pizzapi.track.orderKey(
        order.OrderID,
        order.StoreID,
        function(pizzaData){
            readline.cursorTo(process.stdout, 0, 0);
            readline.clearScreenDown(process.stdout);

            console.log(JSON.stringify(pizzaData.orders));
            setTimeout(
                trackOrder,
                15000
            );
        }
    );
}

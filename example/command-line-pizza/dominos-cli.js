var fs          = require('fs'),
    path        = require('path'),
    readline    = require('readline'),
    colors      = require('colors'),
    dominos     = require('../../dominos-pizza-api.js');

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
                showClosestMenu(data.slice(data.indexOf('full menu for closest')+21));
                return;
            }
            
            if(data.indexOf('menu for closest')>-1){
                showClosestMenu(data.slice(data.indexOf('menu for closest')+16),true);
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
                order(data.slice(data.indexOf('order ')+6),true);
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
        'order'.bgCyan+' {comma deliminated list of items codes}'.info+' *not implemented yet //get item codes from menu'
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
    rl.prompt();
    
    dominos.store.menu(
        storeID,
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

function findStores(address, closest){
    console.log('Looking for stores near '+address.info+'...');
    rl.prompt();
    
    dominos.store.find(
        address, 
        function(storeData){
            var openStores=[];
            
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
            }
            console.log('\n');
            for(var i=0; i<count; i++){
                var store=storeData.result.Stores[i];
                
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
        }
    );
}

function order(items){
    var items=items.split(',');
    console.log(items);
}
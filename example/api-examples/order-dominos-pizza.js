var dominos=require("../../dominos-pizza-api");
var order=new dominos.class.Order();

order.Order.Phone='2024561111';
order.Order.FirstName='Barack';
order.Order.LastName='Obama';
order.Order.Email='CommanderInChief@whitehouse.gov';

dominos.store.find(
    '1600 Pennsylvania Ave NW, 20500', //address to search for nearby stores
    function(storeData){ //callback to run when api returns
        order.Order.Address=storeData.result.Address; //set order address object to validated address
        order.Order.StoreID=storeData.result.Stores[0].StoreID //use closest store
        
        createOrder(
            order.Order.StoreID
        );
    }
);

function createOrder(storeID){
    //Get Menu for Closest Store
    console.log(storeID);
    
    dominos.store.menu(
        storeID,
        function(storeData){ //callback to run when api returns
            //console.log(storeData.result);
            
            //Choose 4 random items from the Preconfigured Products section of the menu
            var easyOrders=Object.keys(storeData.result.PreconfiguredProducts);
            for(var i=0; i<4; i++){
                //create a new product to add to the order
                var product=new dominos.class.Product();

                //set the product code using the random item key 
                product.Code=easyOrders[
                    Math.floor(
                        Math.random()*easyOrders.length
                    )
                ];

                //add the item to the order
                order.Order.Products.push(product);
            }
            
            //console.log(order.Order.Products)
            
            //validate order
            dominos.order.validate(
                order,
                validatedOrder
            );
        }
    );
}

function validatedOrder(orderData){
    if(orderData.success!=true){
        console.log(orderData);
        return;
    }
    order=orderData.result;
    
    //console.log(orderData.result);
    
    //get order price
    dominos.order.price(
        order,
        pricedOrder
    );
}

function pricedOrder(priceData){
    //console.log(priceData.result.Order.Amounts);
    
    var cardInfo=new dominos.class.Payment();
    cardInfo.Amount=priceData.result.Order.Amounts.Customer;
    
    cardInfo.Number='4444888888888888';
    cardInfo.CardType='VISA';
    cardInfo.Expiration='1017';
    cardInfo.SecurityCode='189';
    cardInfo.PostalCode='20500';
    
    order.Order.Payments.push(cardInfo);
    
    //console.log(order.Order.Payments)
    
    dominos.order.place(order,orderPlaced);
}

function orderPlaced(orderData){
    console.log(orderData.result.Order);
    
    //incase it fails check the StatusItems
    if(orderData.result.Order.Status==-1){
        console.log(
            '\n###### NO PIZZA FOR YOU! ######\n',
            orderData.result.Order.StatusItems,'\n',
            orderData.Order.CorrectiveAction,
            '\n#########################\n\n'
        );
        return;
    }
    
    dominos.track.phone(
        orderData.result.Order.Phone, //phone number pizza is associated with
        function(pizzaData){ //callback to run when api returns
            console.log('\n\n########################\nTracking pizza by phone\n########################\n',pizzaData,'\n############\n');
        }
    );
    //console.log(orderData.result.Order.StatusItems);
}
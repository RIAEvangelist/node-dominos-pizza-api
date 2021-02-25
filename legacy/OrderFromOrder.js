if(parameters['Order'] || parameters['order']) {  //Used to initialize order object from Dominos results (Also handy for initializing from DB)
    var prevOrder = parameters.Order;
    var Customer = parameters.customer;

    this.Address = (Customer)? (
        (Customer.address)? Customer.address : prevOrder.Address
    ):prevOrder.Address;

    this.CustomerID = (Customer)? (
        (Customer.address)? Customer.ID : prevOrder.CustomerID
    ):prevOrder.CustomerID;

    this.Email = (Customer)? (
        (Customer.address)? Customer.email : prevOrder.Email
    ):prevOrder.Email;

    this.FirstName = (Customer)? (
        (Customer.address)? Customer.firstName : prevOrder.FirstName
    ):prevOrder.FirstName;

    this.LastName = (Customer)? (
        (Customer.address)? Customer.lastName : prevOrder.LastName
    ):prevOrder.LastName;

    this.OrderID = prevOrder.OrderID;
    this.Products = prevOrder.Products;
    this.Market = prevOrder.Market;
    this.Currency = prevOrder.Currency;
    this.StoreID = prevOrder.StoreID;
    this.Amounts = prevOrder.Amounts || {};
    this.BusinessDate = prevOrder.BusinessDate || '';
    this.EstimatedWaitMinutes = prevOrder.EstimatedWaitMinutes || '';
    this.PriceOrderTime = prevOrder.PriceOrderTime || '';
    this.AmountsBreakdown = prevOrder.AmountsBreakdown || {};
}
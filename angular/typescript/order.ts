class Order {
    id: number;
    itemName: String;
    price: number;
    address: String;

    constructor(id:number,item:String,price:number,address:String){
        this.id=id;
        this.itemName=item;
        this.price=price;
        this.address=address;
    }}

        let orders = [];
        for (let index = 0; index < 10; index++) {
            let order = {
                id: index * 10 + 1,
                itemName: 'item' + index,
                price: (index * 21) + 15,
                address: 'main' + index
            }
            orders.push(order);
        } 
        
        console.log("Display array");
        console.log(orders);
    
    // --------sorting
  
        let sortedOrders = orders.sort(function (order1, order2) {
            return order2.price - order1.price;
        })
        console.log("Display sorted array");
        console.log(orders);
    


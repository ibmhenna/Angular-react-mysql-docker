var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.orders = function () {
        var orders = [];
        for (var index = 0; index < 10; index++) {
            var order = {
                id: index * 10,
                itemName: 'item' + index,
                price: (index * 21) + 15,
                address: 'main' + index
            };
            orders.push(order);
        }
        console.log(orders);
    };
    return Order;
}());
var o1 = new Order();
o1.orders();
// --------sorting
// let sortedOrders = orders.sort(function (order1, order2) {
//     return order2.price - order1.price;
// })
// console.log(sortedOrders);

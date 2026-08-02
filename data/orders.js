export const orders = JSON.parse(localStorage.getItem('orders')) || [];


export function addOrder(order) {
    orders.unshift(order);
    saveToStarage();
}

function saveToStarage() {
    localStorage.setItem('orders', JSON.stringify(orders));
}
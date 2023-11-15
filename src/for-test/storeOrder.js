import { isNotIncludedMenus, isNotOneMore, isNotOrderForm, isOrderBeverage, isOverOrder, isOverlapMenu } from "../error/orderError";

class storeOrder {
    #orderData

    constructor(order) {
        this.#validate(order);
        this.#orderData = order;
    }

    #validate(order) {
        this.#invalidOneMore(order)
        this.#invalidIncludedMenus(order)
        this.#invalidOrderForm(order)
        this.#validOverlapMenu(order)
        this.#validOrderBeverage(order)
        this.#validOverOrder(order)
    }

    #invalidOneMore(order) {
        isNotOneMore(order);
    }

    #invalidIncludedMenus(order) {
        isNotIncludedMenus(order);
    }

    #invalidOrderForm(order) {
        isNotOrderForm(order);
    }

    #validOverlapMenu(order) {
        isOverlapMenu(order);
    }

    #validOrderBeverage(order) {
        isOrderBeverage(order);
    }

    #validOverOrder(order) {
        isOverOrder(order);
    }

    getOrder() {
        return this.#orderData;
    }
}

export default storeOrder;
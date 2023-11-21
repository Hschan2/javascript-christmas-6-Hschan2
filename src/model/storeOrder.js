import { isNotIncludedMenus, isNotOneMore, isNotOrderForm, isOrderBeverage, isOverOrder, isOverlapMenu } from "../error/orderError";
import separateMenu from "../utils/separateMenu";

class storeOrder {
    #orderData

    constructor(order) {
        this.#orderData = separateMenu(order);
        this.#validate(this.#orderData);
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
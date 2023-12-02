import { MENUS } from "../constants/objects";

class Amount {
    #allOrderAmount

    constructor(order) {
        this.#allOrderAmount = this.#sumAllOrderAmount(order);
    }

    #sumMenuCategory(menuCategory, order) {
        return Object.entries(order)
            .filter(([menu]) => MENUS[menuCategory].hasOwnProperty(menu))
            .reduce((total, [menu, count]) => total + MENUS[menuCategory][menu] * count, 0);
    }

    #sumAllOrderAmount(order) {
        const appetizerAmount = this.#sumMenuCategory('appetizer', order);
        const mainAmount = this.#sumMenuCategory('main', order);
        const dessertAmount = this.#sumMenuCategory('dessert', order);
        const beverageAmount = this.#sumMenuCategory('beverage', order);

        return appetizerAmount + mainAmount + dessertAmount + beverageAmount;
    }

    getAllOrderAmount() {
        return this.#allOrderAmount;
    }
}

export default Amount;
class storeValues {
    #date
    #order
    #totalAmount

    constructor() {
        this.#date = this.setDate();
        this.#order = this.setOrder();
        this.#totalAmount = this.setTotalAmount();
    }

    setDate() {
        const a = "3";

        return Number(3);
    }

    setOrder() {
        const b = "시저샐러드-1,티본스테이크-1";

        return b;
    }

    setTotalAmount() {
        const c = 63000;

        return c;
    }

    getDate() {
        return this.#date;
    }

    getOrder() {
        return this.#order;
    }

    getTotalAmount() {
        return this.#totalAmount;
    }
}

export default storeValues;
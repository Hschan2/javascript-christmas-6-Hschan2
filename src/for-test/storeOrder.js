class storeOrder {
    #order
    #date
    #totalAmount

    setOrder(order) {
        this.#order = order;
    }

    getOrder() {
        return this.#order;
    }

    setDate(date) {
        this.#date = date;
    }

    getDate() {
        return this.#date;
    }

    setTotalAmount(totalAmount) {
        this.#totalAmount = totalAmount;
    }

    getTotalAmount() {
        return this.#totalAmount;
    }
}

export default storeOrder;
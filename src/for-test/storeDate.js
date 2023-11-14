import checkAllDateError from "../error/dateError";

class storeDate {
    #date

    setData(date) {
        this.#date = date;
        checkAllDateError(this.#date);
    }

    getDate() {
        return Number(this.#date);
    }
}

export default storeDate;
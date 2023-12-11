import { isInvalidDate, isNotNumber } from "../error/dateError";

class storeDate {
    #dateNumber

    constructor(date) {
        this.#validate(date);
        this.#dateNumber = date;
    }

    #validate(date) {
        this.#invalidNumber(date)
        this.#invalidDate(date)
    }

    #invalidNumber(date) {
        isNotNumber(date);
    }

    #invalidDate(date) {
        isInvalidDate(date);
    }

    getDate() {
        return this.#dateNumber;
    }
}

export default storeDate;
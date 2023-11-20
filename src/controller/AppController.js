import OutputView from "../OutputView";
import storeBenefits from "../model/storeBenefits";
import inputValid from "../valid/inputValid";

class AppController {
    #inputView
    #outputView
    #eventPlanner

    constructor() {
        this.#inputView = inputValid;
        this.#outputView = OutputView;
        this.#benefitsSet = new Set();
    }

    async christmasStart() {
        this.#outputView.printHello();

        const inputDate = await this.#readDate();
        const inputOrder = await this.#readOrder();

        this.#showEventPlanner(inputDate, inputOrder);
    }

    async #readDate() {
        try {
            this.#saveDate = await this.#inputView.validDate();
        } catch (error) {
            this.#outputView.printError(error);
            return this.#readDate();
        }
    }

    async #readOrder() {
        try {
            this.#saveOrder = await this.#inputView.validOrder();
        } catch (error) {
            this.#outputView.printError(error);
            return this.#readOrder();
        }
    }

    #showEventPlanner(date, order) {
        this.#outputView.printPreview(date);
        this.#eventPlanner = storeBenefits(date, order);
    }
}

export default AppController;
import OutputView from "../OutputView";
import Benefits from "../domain/Benefits";
import inputValid from "../valid/inputValid";

class AppController {
    #inputView
    #outputView
    #eventPlanner
    #eventPossible

    constructor() {
        this.#inputView = inputValid;
        this.#outputView = OutputView;
    }

    async christmasStart() {
        this.#outputView.printHello();

        const inputDate = await this.#readDate();
        const inputOrder = await this.#readOrder();

        this.#showEventPlanner(inputDate, inputOrder);
    }

    async #readDate() {
        try {
            return await this.#inputView.validDate();
        } catch (error) {
            this.#outputView.printError(error);
            return await this.#readDate();
        }
    }

    async #readOrder() {
        try {
            return await this.#inputView.validOrder();
        } catch (error) {
            this.#outputView.printError(error);
            return await this.#readOrder();
        }
    }

    #showEventPlanner(date, order) {
        this.#outputView.printPreview(date);
        this.#eventPlanner = new Benefits(date, order);
        this.#eventPossible = this.#eventPlanner.getAllOrderAmount() < 10000 ? false : true;
        this.#outputView.printBenefitsList(order, this.#eventPlanner, this.#eventPossible);
    }
}

export default AppController;
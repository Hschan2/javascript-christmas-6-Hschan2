import DateController from "../controller/DateController";
import OrderController from "../controller/OrderController";

const inputValid = {
    async validDate() {
        const getDate = await DateController.readDate();
        return getDate;
    },

    async validOrder() {
        const getOrder = await OrderController.readOrder();
        return getOrder;
    },
}

export default inputValid;
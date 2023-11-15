import InputView from "../InputView";
import checkAllOrderError from "../error/orderError";
import storeDate from "../model/storeDate";
import storeOrder from "../model/storeOrder";

const inputValid = {
    async validDate() {
        const getDate = await InputView.readDate();
        const validDate = new storeDate(getDate);

        return Number(validDate.getDate());
    },

    async validOrder() {
        const getOrder = await InputView.readOrder();
        const validOrder = new storeOrder(getOrder);

        return validOrder.getOrder();
    },
}

export default inputValid;
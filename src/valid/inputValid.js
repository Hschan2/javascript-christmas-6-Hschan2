import InputView from "../InputView";
import checkAllDateError from "../error/dateError";
import checkAllOrderError from "../error/orderError";

const inputValid = {
    async validDate() {
        const getDate = await InputView.readDate();
        checkAllDateError(getDate);

        return Number(getDate);
    },

    async validOrder() {
        const getOrder = await InputView.readOrder();
        checkAllOrderError(getOrder);

        return getOrder;
    },
}

export default inputValid;
import InputView from "../InputView";
import storeOrder from "../model/storeOrder";
import separateMenu from "../utils/separateMenu";

class OrderController {
    static async readOrder() {
        try {
            const getOrder = await InputView.readOrder();
            const separateOrder = separateMenu(getOrder);
            const validatedOrder = new storeOrder(separateOrder);
            return validatedOrder.getOrder();
        } catch (error) {
            throw error;
        }
    }
}

export default OrderController;
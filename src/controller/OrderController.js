import InputView from "../InputView";
import storeOrder from "../model/storeOrder";

class OrderController {
    static async readOrder() {
        try {
            const getOrder = await InputView.readOrder();
            const validatedOrder = new storeOrder(getOrder);
            return validatedOrder.getOrder();
        } catch (error) {
            throw error;
        }
    }
}

export default OrderController;
import InputView from "../InputView";
import storeDate from "../model/storeDate";

class DateController {
    static async readDate() {
        try {
            const getDate = await InputView.readDate();
            const validatedDate = new storeDate(getDate);
            return Number(validatedDate.getDate());
        } catch (error) {
            throw error;
        }
    }
}

export default DateController;
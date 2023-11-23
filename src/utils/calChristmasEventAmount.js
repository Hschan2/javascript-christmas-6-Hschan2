import { OUTPUT_MESSAGE } from "../constants/messages";
import { EVENT_BENEFITS_RESULT, OBJECT } from "../constants/objects";

function calChristmasEventAmount(date) {
    if (date >= OBJECT.minDate && date <= OBJECT.christmasDate) {
        EVENT_BENEFITS_RESULT[OUTPUT_MESSAGE.printChristmasDiscount] = OBJECT.minDiscountAmount + (OBJECT.increasedDiscountAmount * date) - 100;
    }
}

export default calChristmasEventAmount;
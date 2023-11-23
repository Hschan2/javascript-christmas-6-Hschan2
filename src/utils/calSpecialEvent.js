import { OUTPUT_MESSAGE } from "../constants/messages";
import { ABOUT_EVENT_DATE, EVENT_BENEFITS_RESULT, OBJECT } from "../constants/objects";

function calSpecialEvent(date) {
    if (ABOUT_EVENT_DATE.SpecialEvent.includes(date)) {
        EVENT_BENEFITS_RESULT[OUTPUT_MESSAGE.printSpecialDiscount] = OBJECT.minDiscountAmount;
    }
}

export default calSpecialEvent;
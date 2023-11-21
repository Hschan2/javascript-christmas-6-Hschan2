import { ABOUT_EVENT_DATE, OBJECT } from "../constants/objects";

function calSpecialEvent(date) {
    if (ABOUT_EVENT_DATE.SpecialEvent.includes(date)) {
        return OBJECT.minDiscountAmount;
    }

    return 0;
}

export default calSpecialEvent;
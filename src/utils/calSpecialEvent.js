import { ABOUT_EVENT_DATE, OBJECT } from "../constants/objects";

function calSpecialEvent(date) {
    const numberOfDate = Number(date);

    if (ABOUT_EVENT_DATE.SpecialEvent.includes(numberOfDate)) {
        return OBJECT.minDiscountAmount;
    }

    return 0;
}

export default calSpecialEvent;
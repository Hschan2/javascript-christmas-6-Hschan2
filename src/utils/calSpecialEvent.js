import { ABOUT_EVENT_DATE } from "../constants/objects";

function calSpecialEvent(date) {
    const numberOfDate = Number(date);

    if (ABOUT_EVENT_DATE.SpecialEvent.includes(numberOfDate)) {
        return 1000;
    }

    return 0;
}

export default calSpecialEvent;
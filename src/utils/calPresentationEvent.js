import { OUTPUT_MESSAGE } from "../constants/messages";
import { EVENT_BENEFITS_RESULT, OBJECT } from "../constants/objects";

function calPresentationEvent(totalAmount) {
    if (totalAmount >= OBJECT.overTwelveThousand) {
        EVENT_BENEFITS_RESULT[OUTPUT_MESSAGE.printPresentationDiscount] = OBJECT.Champagne;
        return ['샴페인 1개', OBJECT.Champagne];
    }
    return ['없음', OBJECT.zero];
}

export default calPresentationEvent;
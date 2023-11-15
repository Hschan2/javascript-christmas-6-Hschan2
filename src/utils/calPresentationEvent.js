import { OBJECT } from "../constants/objects";

function calPresentationEvent(totalAmount) {
    if (totalAmount >= OBJECT.overTwelveThousand) {
        return ['샴페인 1개', OBJECT.Champagne];
    }
    return ['없음', OBJECT.zero];
}

export default calPresentationEvent;
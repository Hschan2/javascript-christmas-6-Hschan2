import { OBJECT } from "../constants/objects";

function getPresentation(totalAmount) {
    if (totalAmount >= OBJECT.overTwelveThousand) {
        return ['샴페인 1개', 25000];
    }

    return ['없음', 0];
}

export default getPresentation;
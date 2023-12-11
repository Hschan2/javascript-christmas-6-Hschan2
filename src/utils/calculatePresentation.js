import { OBJECT } from "../constants/objects";

function calculatePresentation(allOrderAmount) {
    return allOrderAmount >= OBJECT.overTwelveThousand ? "샴페인 1개" : "없음";
}

export default calculatePresentation;
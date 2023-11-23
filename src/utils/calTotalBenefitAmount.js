import { EVENT_BENEFITS_RESULT } from "../constants/objects";

function calTotalBenefitAmount() {
    return Object.values(EVENT_BENEFITS_RESULT).reduce((acc, value) => acc + value, 0);
}

export default calTotalBenefitAmount;
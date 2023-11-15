import { OBJECT } from "../constants/objects";

function calBadge(benefitAmount, presentationAmount) {
    const allBenefitAmounts = benefitAmount + presentationAmount[1];

    return allBenefitAmounts >= OBJECT.santaBadge
        ? '산타'
        : allBenefitAmounts >= OBJECT.treeBadge
        ? '트리'
        : allBenefitAmounts >= OBJECT.starBadge
        ? '별'
        : '없음';
}

export default calBadge;
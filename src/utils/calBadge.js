function calBadge(benefitAmount, presentationAmount) {
    const allBenefitAmounts = benefitAmount + presentationAmount;
    let badge = '';

    if (allBenefitAmounts >= 20000) badge = '산타';
    if (allBenefitAmounts >= 10000) badge = '트리';
    if (allBenefitAmounts >= 5000) badge = '별';
    if (allBenefitAmounts < 5000) badge = '없음';

    return badge;
}

export default calBadge;
function calBadge(benefitAmount, presentationAmount) {
    const allBenefitAmounts = benefitAmount + presentationAmount[1];

    return allBenefitAmounts >= 20000
        ? '산타'
        : allBenefitAmounts >= 10000
        ? '트리'
        : allBenefitAmounts >= 5000
        ? '별'
        : '없음';
}

export default calBadge;
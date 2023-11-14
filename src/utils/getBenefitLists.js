import calChristmasEventAmount from "./calChristmasEventAmount";
import { calSpecialEvent, calWeekdayEvent, calWeekendEvent } from "./calDateEvent";

function getBenefitLists(date, order) {
    const christmasBenefit = calChristmasEventAmount(date);
    const weekdayBenefit = calWeekdayEvent(date, order);
    const weekendBenefit = calWeekendEvent(date, order);
    const specialBenefit = calSpecialEvent(date);
    const sumBenefit = sumBenefits(christmasBenefit, weekdayBenefit, weekendBenefit, specialBenefit);

    return { christmasBenefit, weekdayBenefit, weekendBenefit, specialBenefit, sumBenefit }
}

function sumBenefits(christmas, weekday, weekend, special) {
    return christmas + weekday + weekend + special;
}

export default getBenefitLists;
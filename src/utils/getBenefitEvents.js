import calChristmasEventAmount from "./calChristmasEventAmount";
import calWeekdayEvent from "./calWeekdayEvent";
import calWeekendEvent from "./calWeekendEvent";
import calSpecialEvent from "./calSpecialEvent";
import calPresentationEvent from "./calPresentationEvent";
import calTotalBenefitAmount from "./calTotalBenefitAmount";
import calBadge from "./calBadge";

function getBenefitEvents(date = 0, order = '', buyTotalAmount = 0) {
    calChristmasEventAmount(date);
    calWeekdayEvent(date, order);
    calWeekendEvent(date, order);
    calSpecialEvent(date);
    const presentationEvent = calPresentationEvent(buyTotalAmount);
    const allBenefitAmount = calTotalBenefitAmount();
    const badge = calBadge(allBenefitAmount, presentationEvent);

    return {
        presentationEvent,
        allBenefitAmount,
        badge
    }
}

export default getBenefitEvents;
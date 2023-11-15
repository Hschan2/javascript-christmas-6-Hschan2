import calChristmasEventAmount from "./calChristmasEventAmount";
import calWeekdayEvent from "./calWeekdayEvent";
import calWeekendEvent from "./calWeekendEvent";
import calSpecialEvent from "./calSpecialEvent";
import calPresentationEvent from "./calPresentationEvent";
import calTotalBenefitAmount from "./calTotalBenefitAmount";
import calBadge from "./calBadge";

function getBenefitEvents(date = 0, order = '', buyTotalAmount = 0) {
    const christmasDiscount = calChristmasEventAmount(date);
    const weekdayDiscount = calWeekdayEvent(date, order);
    const weekendDiscount = calWeekendEvent(date, order);
    const starSpecialDiscount = calSpecialEvent(date);
    const presentationEvent = calPresentationEvent(buyTotalAmount);
    const allBenefitAmount = calTotalBenefitAmount(christmasDiscount, weekdayDiscount, weekendDiscount, starSpecialDiscount);
    const badge = calBadge(allBenefitAmount, presentationEvent);

    return {
        christmasDiscount,
        weekdayDiscount,
        weekendDiscount,
        starSpecialDiscount,
        presentationEvent,
        allBenefitAmount,
        badge
    }
}

export default getBenefitEvents;
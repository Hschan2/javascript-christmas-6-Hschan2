import { ABOUT_EVENT_DATE, OBJECT, WEEK_EVENT_MENUS } from "../constants/objects";
import calculateMenuDiscount from "../utils/calculateMenuDiscount"

class Discount {
    static calculateChristmasDiscount(date) {
        return date >= OBJECT.minDate && date <= OBJECT.christmasDate ? OBJECT.minDiscountAmount + (OBJECT.increasedDiscountAmount * date) - 100 : OBJECT.zero;
    }

    static calculateWeekdayDiscount(date, order) {
        return calculateMenuDiscount(date, order, WEEK_EVENT_MENUS.Dessert);
    }

    static calculateWeekendDiscount(date, order) {
        return calculateMenuDiscount(date, order, WEEK_EVENT_MENUS.Main);
    }

    static calculateSpecialDiscount(date) {
        return ABOUT_EVENT_DATE.SpecialEvent.includes(date) ? OBJECT.minDiscountAmount : OBJECT.zero;
    }

    static calculatePresentationDiscount(allOrderAmount) {
        return allOrderAmount >= OBJECT.overTwelveThousand ? OBJECT.Champagne : OBJECT.zero;
    }
}

export default Discount;
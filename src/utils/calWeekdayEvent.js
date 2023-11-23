import { OUTPUT_MESSAGE } from "../constants/messages";
import { ABOUT_EVENT_DATE, EVENT_BENEFITS_RESULT, MENUS, OBJECT } from "../constants/objects";

function calWeekdayEvent(date, order) {
    let dessertMenuCount = 0;

    if (!ABOUT_EVENT_DATE.WeekendEvent.includes(date)) {
        Object.entries(order).map(([menu, count]) => {
            if (MENUS.dessert.hasOwnProperty(menu)) dessertMenuCount += 1 * count;
        });
        if (dessertMenuCount !== 0) { EVENT_BENEFITS_RESULT[OUTPUT_MESSAGE.printWeekdayDiscount] = dessertMenuCount * OBJECT.weekDiscount; }
    }
}

export default calWeekdayEvent;
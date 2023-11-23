import { OUTPUT_MESSAGE } from "../constants/messages";
import { ABOUT_EVENT_DATE, EVENT_BENEFITS_RESULT, MENUS, OBJECT } from "../constants/objects";

function calWeekendEvent(date, order) {
    let mainMenuCount = 0;

    if (ABOUT_EVENT_DATE.WeekendEvent.includes(date)) {
        Object.entries(order).map(([menu, count]) => {
            if (MENUS.main.hasOwnProperty(menu)) mainMenuCount += 1 * count;
        });
        if (mainMenuCount !== 0) { EVENT_BENEFITS_RESULT[OUTPUT_MESSAGE.printWeekendDiscount] = mainMenuCount * OBJECT.weekDiscount; }
    }
}

export default calWeekendEvent;
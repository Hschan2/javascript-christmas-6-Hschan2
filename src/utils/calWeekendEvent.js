import { ABOUT_EVENT_DATE, MENUS, OBJECT } from "../constants/objects";

function calWeekendEvent(date, order) {
    let mainMenuCount = 0;

    if (ABOUT_EVENT_DATE.WeekendEvent.includes(date)) {
        Object.entries(order).map(([menu, count]) => {
            if (MENUS.main.hasOwnProperty(menu)) mainMenuCount += 1 * count;
        });
    }

    return mainMenuCount * OBJECT.weekDiscount;
}

export default calWeekendEvent;
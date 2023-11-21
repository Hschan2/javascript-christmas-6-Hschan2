import { ABOUT_EVENT_DATE, MENUS, OBJECT } from "../constants/objects";

function calWeekdayEvent(date, order) {
    let dessertMenuCount = 0;

    if (!ABOUT_EVENT_DATE.WeekendEvent.includes(date)) {
        Object.entries(order).map(([menu, count]) => {
            if (MENUS.dessert.hasOwnProperty(menu)) dessertMenuCount += 1 * count;
        });
    }

    return dessertMenuCount * OBJECT.weekDiscount;
}

export default calWeekdayEvent;
import { ABOUT_EVENT_DATE, MENUS, OBJECT } from "../constants/objects";

function calWeekdayEvent(date, order) {
    const numberOfDate = Number(date);
    let dessertMenuCount = 0;

    if (!ABOUT_EVENT_DATE.WeekendEvent.includes(numberOfDate)) {
        const separateOrder = order.split(",");

        for (const eachMenu of separateOrder) {
            const [menu, count] = eachMenu.split("-");

            if (MENUS.dessert.hasOwnProperty(menu)) dessertMenuCount += 1 * count;
        }
    }

    return dessertMenuCount * OBJECT.weekDiscount;
}

export default calWeekdayEvent;
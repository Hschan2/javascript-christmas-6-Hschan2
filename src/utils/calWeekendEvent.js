import { ABOUT_EVENT_DATE, MENUS } from "../constants/objects";

function calWeekendEvent(date, order) {
    const numberOfDate = Number(date);
    let mainMenuCount = 0;

    if (ABOUT_EVENT_DATE.WeekendEvent.includes(numberOfDate)) {
        const separateOrder = order.split(",");

        for (const eachMenu of separateOrder) {
            const [menu, count] = eachMenu.split("-");

            if (MENUS.main.hasOwnProperty(menu)) mainMenuCount += 1 * count;
        }
    }

    return mainMenuCount * 2023;
}

export default calWeekendEvent;
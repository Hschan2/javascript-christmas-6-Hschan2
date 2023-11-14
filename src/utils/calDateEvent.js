import { ABOUT_EVENT_DATE, MENUS } from "../constants/objects";

export function calWeekdayEvent(date, order) {
    const numberOfDate = Number(date);
    let dessertMenuCount = 0;

    if (!ABOUT_EVENT_DATE.WeekendEvent.includes(numberOfDate)) {
        const separateOrder = order.split(",");

        for (const eachMenu of separateOrder) {
            const [menu, count] = eachMenu.split("-");

            if (MENUS.dessert.hasOwnProperty(menu)) dessertMenuCount += 1 * count;
        }
    }

    return dessertMenuCount * 2023;
}

export function calWeekendEvent(date, order) {
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

export function calSpecialEvent(date) {
    const numberOfDate = Number(date);

    if (ABOUT_EVENT_DATE.SpecialEvent.includes(numberOfDate)) {
        return 1000;
    }

    return 0;
}
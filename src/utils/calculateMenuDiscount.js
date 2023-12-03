import { ABOUT_EVENT_DATE, MENUS, OBJECT, WEEK_EVENT_MENUS } from "../constants/objects";

function calculateMenuDiscount(date, order, menuType) {
    if ((menuType === WEEK_EVENT_MENUS.Dessert && !ABOUT_EVENT_DATE.WeekendEvent.includes(date)) ||
        (menuType === WEEK_EVENT_MENUS.Main && ABOUT_EVENT_DATE.WeekendEvent.includes(date))) {
        const menuCount = Object.entries(order)
            .filter(([menu]) => MENUS[menuType].hasOwnProperty(menu))
            .reduce((count, [, value]) => count + value, 0);

        return menuCount !== 0 ? menuCount * OBJECT.weekDiscount : 0;
    }

    return 0;
}

export default calculateMenuDiscount;
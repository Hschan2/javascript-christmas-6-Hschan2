import { ERROR_MESSAGE } from "../constants/messages";
import { MENUS, OBJECT } from "../constants/objects";

export function isNotOneMore(order) {
    Object.entries(order).map(([menu, count]) => {
        if (!(count >= OBJECT.minOrderCount)) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidOrder}`);
    });
}

export function isNotIncludedMenus(order) {
    const allMenus = Object.keys(MENUS)
        .flatMap(category => Object.keys(MENUS[category]));

    Object.entries(order).map(([menu, count]) => {
        if (!allMenus.includes(menu)) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidIncludedMenus}`);
    });
}

export function isNotOrderForm(order) {
    const menuFormatRegex = /^[a-zA-Z가-힣\s]+\-\d+$/;
    Object.entries(order).map(([menu, count]) => {
        if (!menuFormatRegex.test(`${menu}-${count}`)) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidMenuForm}`);
    });
}

export function isOverlapMenu(order) {
    const menuMap = new Set();

    Object.entries(order).map(([menu, count]) => {
        if (menuMap.has(menu)) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidNotOverlap}`);
        else menuMap.add(menu);
    });
}

export function isOrderBeverage(order) {
    const isBeverageOrder = Object.entries(order).every(([menu, count]) => {
        return MENUS.beverage.hasOwnProperty(menu);
    });

    if (isBeverageOrder) {
        throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidNotOnlyOrderedBeverage}`);
    }
}

export function isOverOrder(order) {
    let orderedCount = 0;

    Object.entries(order).map(([menu, count]) => {
        orderedCount += count;
    });

    if (orderedCount > OBJECT.maxOrderCount) {
        throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidUnderTwentyOrder}`);
    }
}
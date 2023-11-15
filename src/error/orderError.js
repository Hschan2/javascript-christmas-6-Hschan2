import { ERROR_MESSAGE } from "../constants/messages";
import { MENUS, OBJECT } from "../constants/objects";

export function isNotOneMore(order) {
    const separateOrder = order.split(",");

    for (const eachMenu of separateOrder) {
        const [_, count] = eachMenu.split("-");

        if (!(count >= OBJECT.minOrderCount)) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidOrder}`);
    }
}

export function isNotIncludedMenus(order) {
    const separateOrder = order.split(",");
    const allMenus = Object.keys(MENUS)
        .flatMap(category => Object.keys(MENUS[category]));

    for (const eachMenu of separateOrder) {
        const [menu, _] = eachMenu.split("-");

        if (!allMenus.includes(menu)) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidIncludedMenus}`);
    }
}

export function isNotOrderForm(order) {
    const separateOrder = order.split(",");
    const menuFormatRegex = /^[a-zA-Z가-힣\s]+\-\d+$/;

    for (const eachMenu of separateOrder) {
        if (!menuFormatRegex.test(eachMenu.trim())) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidMenuForm}`);
    }
}

export function isOverlapMenu(order) {
    const separateOrder = order.split(",");
    const menuMap = new Set();

    for (const eachMenu of separateOrder) {
        const [menu, _] = eachMenu.split("-");

        if (menuMap.has(menu)) throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidNotOverlap}`);
        else menuMap.add(menu);
    }
}

export function isOrderBeverage(order) {
    const separateOrder = order.split(",");
    let isBeverageOrder = true;

    for (const eachMenu of separateOrder) {
        const [menu, _] = eachMenu.split("-");
        if (!MENUS.beverage.hasOwnProperty(menu)) {
            isBeverageOrder = false;
            break;
        }
    }

    if (isBeverageOrder) {
        throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidNotOnlyOrderedBeverage}`);
    }
}

export function isOverOrder(order) {
    const separateOrder = order.split(",");
    let orderedCount = 0;

    for (const eachMenu of separateOrder) {
        const [_, count] = eachMenu.split("-");
        orderedCount += Number(count);
    }

    if (orderedCount > OBJECT.maxOrderCount) {
        throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidUnderTwentyOrder}`);
    }
}
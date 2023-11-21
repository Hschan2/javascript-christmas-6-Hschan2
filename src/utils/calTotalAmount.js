import { MENUS } from "../constants/objects";

function calTotalAmount(order) {
    let totalAmount = 0;

    Object.entries(order).map(([menu, count]) => {
        if (MENUS.appetizer.hasOwnProperty(menu)) totalAmount += MENUS.appetizer[menu] * count;
        if (MENUS.main.hasOwnProperty(menu)) totalAmount += MENUS.main[menu] * count;
        if (MENUS.dessert.hasOwnProperty(menu)) totalAmount += MENUS.dessert[menu] * count;
        if (MENUS.beverage.hasOwnProperty(menu)) totalAmount += MENUS.beverage[menu] * count;
    });

    return totalAmount;
}

export default calTotalAmount;
function separateMenu(order) {
    const separateOrder = order.split(",");
    const menuCount = {};

    for (const eachMenu of separateOrder) {
        const [menu, count] = eachMenu.split("-");
        menuCount[menu] = Number(count);
    }

    return menuCount;
}

export default separateMenu;
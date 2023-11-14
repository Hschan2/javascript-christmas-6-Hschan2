import { EOL as LINE_SEPARATOR } from "os";

function getMenuCount(order) {
    const separateOrder = order.split(",");
    let menuCount = '';

    for (const eachMenu of separateOrder) {
        const [menu, count] = eachMenu.split("-");

        menuCount += `${menu} ${count}개` + LINE_SEPARATOR
    }

    return menuCount.trim();
}

export default getMenuCount;
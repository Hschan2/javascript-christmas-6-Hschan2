import { EOL as LINE_SEPARATOR } from "os";

export const INPUT_MESSAGE = Object.freeze({
    whenVisitDay: "12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)",
    orderMenuAndCount: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)",
})

export const ERROR_MESSAGE = Object.freeze({
    prefix: "[ERROR]",
    InvalidBetweenOneAndThirtyOne: "유효하지 않은 날짜입니다. 다시 입력해 주세요.",
    InvalidNumber: "유효하지 않은 날짜입니다. 다시 입력해 주세요.",
    InvalidIncludedMenus: "유효하지 않은 주문입니다. 다시 입력해 주세요.",
    InvalidOrder: "유효하지 않은 주문입니다. 다시 입력해 주세요.",
    InvalidMenuForm: "유효하지 않은 주문입니다. 다시 입력해 주세요.",
    InvalidNotOverlap: "유효하지 않은 주문입니다. 다시 입력해 주세요.",
    InvalidNotOnlyOrderedBeverage: "음료만 주문 시, 주문할 수 없습니다.",
    InvalidUnderTwentyOrder: "메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.",
})

export const OUTPUT_MESSAGE = Object.freeze({
    printHello: "안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.",
    printOrderedMenu: "<주문 메뉴>" + LINE_SEPARATOR,
    printBeforeDiscount: "<할인 전 총주문 금액>" + LINE_SEPARATOR,
    printPresentation: "<증정 메뉴>" + LINE_SEPARATOR,
    printBenefit: "<혜택 내역>" + LINE_SEPARATOR,
    printAllBenefit: "<총혜택 금액>" + LINE_SEPARATOR,
    printAfterDiscount: "<할인 후 예상 결제 금액>" + LINE_SEPARATOR,
    printEventBadge: "<12월 이벤트 배지>" + LINE_SEPARATOR,
})

export const OUTPUT_PREVIEW = (date) => {
    return `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`
}

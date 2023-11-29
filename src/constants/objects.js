export const OBJECT = Object.freeze({
    zero: 0,
    minDate: 1,
    maxDate: 31,
    christmasDate: 25,
    minOrderCount: 1,
    maxOrderCount: 20,
    minDiscountAmount: 1000,
    increasedDiscountAmount: 100,
    eventAppliedAmount: 10000,
    overTwelveThousand: 120000,
    santaBadge: 20000,
    treeBadge: 10000,
    starBadge: 5000,
    Champagne: 25000,
    weekDiscount: 2023,
})

export const MENUS = Object.freeze({
    appetizer: {
        '양송이수프': 6000,
        '타파스': 5500,
        '시저샐러드': 8000,
    },
    main: {
        '티본스테이크': 55000,
        '바비큐립': 54000,
        '해산물파스타': 35000,
        '크리스마스파스타': 25000,
    },
    dessert: {
        '초코케이크': 15000,
        '아이스크림': 5000,
    },
    beverage: {
        '제로콜라': 3000,
        '레드와인': 60000,
        '샴페인': 25000,
    },
})

export const ABOUT_EVENT_DATE = Object.freeze({
    NotChristmasDayEvent: [26, 27, 28, 29, 30, 31],
    SpecialEvent: [3, 10, 17, 24, 25, 31],
    WeekendEvent: [1, 2, 8, 9, 15, 16, 22, 23, 29, 30],
})

export const UNITS = Object.freeze({
    UnitOfAmount: "원",
    UnitOfSize: "개"
})

export const WEEK_EVENT_MENUS = Object.freeze({
    Dessert: "dessert",
    Main: "main"
})
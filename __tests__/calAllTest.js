import calTotalAmount from "../src/utils/calTotalAmount";
import calWeekdayEvent from "../src/utils/calWeekdayEvent";
import calWeekendEvent from "../src/utils/calWeekendEvent";
import calSpecialEvent from "../src/utils/calSpecialEvent";

describe('메뉴 구매 계산 테스트', () => {
    test('총 계산 금액 확인하기', () => {
        const totalAmountTest = calTotalAmount("시저샐러드-1,티본스테이크-1");

        expect(totalAmountTest).toEqual(63000);
    });

    test('주말 할인 금액 구하기', () => {
        const totalAmountTest = calWeekendEvent("15", "시저샐러드-1,티본스테이크-1");

        expect(totalAmountTest).toEqual(2023);
    });

    test('평일 할인 금액 확인하기', () => {
        const totalAmountTest = calWeekdayEvent("5", "시저샐러드-1,아이스크림-1");

        expect(totalAmountTest).toEqual(2023);
    });

    test('스페셜 할인 금액 확인하기', () => {
        const totalAmountTest = calSpecialEvent("3");

        expect(totalAmountTest).toEqual(1000);
    });
});
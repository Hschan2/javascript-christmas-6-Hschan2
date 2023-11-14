import calChristmasEventAmount from "../src/utils/calChristmasEventAmount";
import { calSpecialEvent, calWeekdayEvent, calWeekendEvent } from "../src/utils/calDateEvent";
import getMenuCount from "../src/utils/getMenuCount";
import getPresentation from "../src/utils/getPresentation";
import { EOL as LINE_SEPARATOR } from "os";

describe('출력을 위한 값 테스트', () => {
    test('모든 메뉴 출력 확인하기', () => {
        const menuCount = getMenuCount("시저샐러드-1,티본스테이크-1");

        expect(menuCount).toEqual("시저샐러드 1개" + LINE_SEPARATOR + "티본스테이크 1개");
    });

    test('증정 혜택 출력 확인하기', () => {
        const [presentation, _] = getPresentation(150000);

        expect(presentation).toEqual("샴페인 1개");
    });

    test('증정 혜택 없음 출력 확인하기', () => {
        const [presentation, _] = getPresentation(100000);

        expect(presentation).toEqual("없음");
    });

    test('크리스마스 디데이 혜택 출력 확인하기', () => {
        const christmasBenefit = calChristmasEventAmount("3");

        expect(christmasBenefit).toEqual(1200);
    });

    test('평일 혜택 출력 확인하기', () => {
        const weekdayBenefit = calWeekdayEvent("3", "티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1");

        expect(weekdayBenefit).toEqual(4046);
    });

    test('주말 혜택 출력 확인하기', () => {
        const weekendBenefit = calWeekendEvent("2", "티본스테이크-1,바비큐립-2,초코케이크-2,제로콜라-1");

        expect(weekendBenefit).toEqual(6069);
    });

    test('특별 혜택 출력 확인하기', () => {
        const weekdayBenefit = calSpecialEvent("10");

        expect(weekdayBenefit).toEqual(1000);
    });
});
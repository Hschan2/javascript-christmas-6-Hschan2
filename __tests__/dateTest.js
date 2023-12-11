import { isInvalidDate, isNotNumber } from "../src/for-test/validDateTest";

describe('예상 방문 날짜 입력 테스트', () => {
    test('입력값이 숫자인지 확인하기', () => {
        expect(() => {
            isNotNumber('abc');
        }).toThrow('[ERROR]');
    });

    test('유효한 날짜를 입력했는지 확인하기', () => {
        expect(() => {
            isInvalidDate(110);
        }).toThrow('[ERROR]');
    });
});
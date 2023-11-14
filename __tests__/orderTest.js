import { isNotIncludedMenus, isNotOneMore, isNotOrderForm, isOrderBeverage, isOverOrder, isOverlapMenu } from "../src/for-test/validOrderTest";

describe('주문 메뉴와 갯수 테스트', () => {
    test('주문 갯수가 1개 이상인지 확인하기', () => {
        expect(() => {
            isNotOneMore('시저샐러드-');
        }).toThrow('[ERROR]');
    });

    test('메뉴 리스트에 없는 메뉴를 주문했는지 확인하기', () => {
        expect(() => {
            isNotIncludedMenus('갈비탕-1');
        }).toThrow('[ERROR]');
    });

    test('주문 형식에 맞게 입력했는지 확인하기', () => {
        expect(() => {
            isNotOrderForm('시저샐러드#1');
        }).toThrow('[ERROR]');
    });

    test('같은 메뉴를 중복하여 입력했는지 확인하기', () => {
        expect(() => {
            isOverlapMenu('시저샐러드-1,시저샐러드-1');
        }).toThrow('[ERROR]');
    });

    test('음료만 주문했는지 확인하기', () => {
        expect(() => {
            isOrderBeverage('제로콜라-1,레드와인-1');
        }).toThrow('[ERROR]');
    });

    test('총 주문 갯수가 20개가 넘었는지 확인하기', () => {
        expect(() => {
            isOverOrder('시저샐러드-10,양송이수프-11');
        }).toThrow('[ERROR]');
    });
});
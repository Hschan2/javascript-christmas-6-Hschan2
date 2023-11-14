import storeDate from "../src/for-test/storeDate";
import storeOrder from "../src/for-test/storeOrder";
import storeValues from "../src/for-test/storeValues";

describe('출력을 위한 값 테스트', () => {
    test('Date 클래스 저장 값 확인하기', () => {
        const newDate = new storeDate();
        newDate.setData("3");

        expect(newDate.getDate()).toEqual(3);
    });

    test('Order 클래스 저장 값 확인하기', () => {
        const newOrder = new storeOrder();
        newOrder.setDate("3");
        newOrder.setOrder("티본스테이크-1,시저샐러드-1");
        newOrder.setTotalAmount(63000);

        expect(newOrder.getDate()).toEqual("3");
        expect(newOrder.getOrder()).toEqual("티본스테이크-1,시저샐러드-1");
        expect(newOrder.getTotalAmount()).toEqual(63000);
    });

    test('클래스 내 모든 데이터 저장 확인하기', () => {
        const values = new storeValues();

        expect(values.getDate()).toEqual(3);
        expect(values.getOrder()).toEqual("시저샐러드-1,티본스테이크-1");
        expect(values.getTotalAmount()).toEqual(63000);
    });
});
# ☰ 구현 목록

#### ✅ 사용자 입력 요소들을 구현합니다.   

식당 예상 방문 날짜, 주문할 메뉴와 개수를 입력하고 유효성 검사 진행 → InputValid.js   

- [x] 식당 예상 방문 날짜 입력합니다.
    - [x] 유효성 검사를 진행합니다. → dateError.js
        - 숫자만 입력했는지 확인하기
        - 1 ~ 31 사이로 입력했는지 확인하기
- [x] 주문할 메뉴와 개수 입력합니다.
    - [x] 유효성 검사를 진행합니다. → orderError.js
        - 음료만 주문했는지 확인하기
        - 메뉴판에 없는 메뉴를 입력했는지 확인하기
        - 메뉴를 한 번에 1~20개 사이로 주문했는지 확인하기
        - '메뉴-개수' 형식으로 입력했는지 확인하기
        - 메뉴를 중복해서 입력했는지 확인하기

#### ✅ 입력한 값들을 활용해 혜택을 계산합니다.   

식당 예상 방문 날짜, 주문 메뉴와 개수 데이터를 받아 혜택을 계산 → Benefits.js   

- [x] 전체 주문 액수를 계산합니다. → Amount.js
- [x] 크리스마스, 주중, 주말, 특별, 증정 혜택을 계산합니다. → Discount.js
- [x] 증정 선물 혜택을 확인합니다. → calculatePresentation.js
- [x] 모든 혜택 할인 비용을 계산합니다. → Amount.js
- [x] 총 혜택 할인 비용으로 배지 내역을 계산합니다.

#### ✅ 계산된 데이터들을 출력합니다.   

출력 예시 화면에 맞게 데이터들을 출력합니다. → OutputView.js   

- [x] 인사말 출력합니다.
- [x] 예상 방문 날짜와 함께 이벤트 프리뷰를 출력합니다.
- [x] 주문 메뉴들의 내역들을 출력합니다.
- [x] 주문 메뉴, 할인 전 총주문 금액, 증정 메뉴, 혜택 내역, 총혜택 금액, 할인 후 예상 결제 금액, 12월 이벤트 배지 내용들을 출력합니다.

#### ✅ 모듈화를 시도합니다.

- Controller
    - AppController: 이벤트 전체 실행
    - DateController: 예상 날짜 입력 관리
    - OrderController: 메뉴 및 개수 입력 관리
- Domain
    - Amount: 전체 주문 값, 총 혜택 값 계산
    - Benefits: 모든 혜택 계산
    - Discount: 각 할인 계산
- View
    - InputView: 값 입력
    - OutputView: 값 출력
- Model(Error)
    - storeDate(dateError): 예상 날짜 값 유효성 처리
    - storeOrder(orderError): 주문 메뉴 및 개수 유효성 처리
- Object(Constant)
    - messages: 메시지 내용 목록 상수 처리
    - objects: 고정된 모든 값 상수 처리
- Utils
    - calculateMenuDiscount: 주중 이벤트 계산
    - calculatePresentation: 증정 메뉴 계산
    - convertUnit: 천 단위 계산
    - separateMenu: '메뉴-개수'의 입력 값 분리 작업
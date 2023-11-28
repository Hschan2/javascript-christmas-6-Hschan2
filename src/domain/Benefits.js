import { OUTPUT_MESSAGE } from "../constants/messages";
import { ABOUT_EVENT_DATE, MENUS, OBJECT } from "../constants/objects";
import Amount from "./Amount";

class Benefits {
    #benefitsList
    #presentationResult
    #allAmount
    #badgeResult
    #benefitsAmount

    constructor(date, order) {
        this.#benefitsList = {};
        this.#getBenefits(date, order);
        this.#allAmount = new Amount(order);
        this.#presentationResult = this.#presentationEvent(this.#allAmount);
        this.#badgeResult = this.#badge(this.#benefitsList);
        this.#benefitsAmount = this.#calBenefitsAmount(this.#benefitsList);
    }

    #getBenefits(date, order) {
        this.#christmasEvent(date);
        this.#weekdayEvent(date, order);
        this.#weekendEvent(date, order);
        this.#specialEvent(date);
    }

    #christmasEvent(date) {
        if (date >= OBJECT.minDate && date <= OBJECT.christmasDate) {
            this.#benefitsList[OUTPUT_MESSAGE.printChristmasDiscount] = OBJECT.minDiscountAmount + (OBJECT.increasedDiscountAmount * date) - 100;
        }
    }

    #weekdayEvent(date, order) {
        let dessertMenuCount = 0;

        if (!ABOUT_EVENT_DATE.WeekendEvent.includes(date)) {
            Object.entries(order).map(([menu, count]) => {
                if (MENUS.dessert.hasOwnProperty(menu)) dessertMenuCount += 1 * count;
            });
            if (dessertMenuCount !== 0) {
                this.#benefitsList[OUTPUT_MESSAGE.printWeekdayDiscount] = dessertMenuCount * OBJECT.weekDiscount;
            }
        }
    }

    #weekendEvent(date, order) {
        let mainMenuCount = 0;

        if (ABOUT_EVENT_DATE.WeekendEvent.includes(date)) {
            Object.entries(order).map(([menu, count]) => {
                if (MENUS.main.hasOwnProperty(menu)) mainMenuCount += 1 * count;
            });
            if (mainMenuCount !== 0) {
                this.#benefitsList[OUTPUT_MESSAGE.printWeekendDiscount] = mainMenuCount * OBJECT.weekDiscount;
            }
        }
    }

    #specialEvent(date) {
        if (ABOUT_EVENT_DATE.SpecialEvent.includes(date)) {
            this.#benefitsList[OUTPUT_MESSAGE.printSpecialDiscount] = OBJECT.minDiscountAmount;
        }
    }

    #presentationEvent(allAmount) {
        if (allAmount.getAllOrderAmount() >= OBJECT.overTwelveThousand) {
            this.#benefitsList[OUTPUT_MESSAGE.printPresentationDiscount] = OBJECT.Champagne;
            return '샴페인 1개'
        }
        this.#benefitsList[OUTPUT_MESSAGE.printPresentationDiscount] = OBJECT.zero;
        return '없음';
    }

    #badge(allBenefitAmount) {
        const getBenefitsAmount = Object.values(allBenefitAmount).reduce((acc, value) => acc + value, 0);

        return getBenefitsAmount >= OBJECT.santaBadge
            ? '산타'
            : getBenefitsAmount >= OBJECT.treeBadge
                ? '트리'
                : getBenefitsAmount >= OBJECT.starBadge
                    ? '별'
                    : '없음';
    }

    #calBenefitsAmount(benefitsList) {
        return Object.values(benefitsList).reduce((acc, value) => acc + value, 0);
    }

    getBenefitsList() {
        return this.#benefitsList;
    }

    getPresentation() {
        return this.#presentationResult;
    }

    getAllOrderAmount() {
        return this.#allAmount.getAllOrderAmount();
    }

    getAllBenefitsAmount() {
        return this.#benefitsAmount;
    }

    getAfterDiscount() {
        const sumExceptPresentation = Object.values(this.#benefitsList).reduce((sum, value, index) => Object.keys(this.#benefitsList)[index] !== OUTPUT_MESSAGE.printPresentationDiscount ? sum + value : sum, 0);

        return this.#allAmount.getAllOrderAmount() - sumExceptPresentation;
    }

    getBadge() {
        return this.#badgeResult;
    }
}

export default Benefits;
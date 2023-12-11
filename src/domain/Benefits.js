import { OUTPUT_MESSAGE } from "../constants/messages";
import { OBJECT } from "../constants/objects";
import calculatePresentation from "../utils/calculatePresentation";
import Amount from "./Amount";
import Discount from "./Discount";

class Benefits {
    #benefitsList
    #presentationResult
    #allAmount
    #badgeResult
    #benefitsAmount

    constructor(date, order) {
        this.#benefitsList = {};
        this.#allAmount = new Amount(order);
        this.#calculateBenefits(date, order);
    }

    #calculateBenefits(date, order) {
        this.#benefitsList[OUTPUT_MESSAGE.printChristmasDiscount] = Discount.calculateChristmasDiscount(date);
        this.#benefitsList[OUTPUT_MESSAGE.printWeekdayDiscount] = Discount.calculateWeekdayDiscount(date, order);
        this.#benefitsList[OUTPUT_MESSAGE.printWeekendDiscount] = Discount.calculateWeekendDiscount(date, order);
        this.#benefitsList[OUTPUT_MESSAGE.printSpecialDiscount] = Discount.calculateSpecialDiscount(date);
        this.#benefitsList[OUTPUT_MESSAGE.printPresentationDiscount] = Discount.calculatePresentationDiscount(this.#allAmount.getAllOrderAmount());

        this.#presentationResult = calculatePresentation(this.#allAmount.getAllOrderAmount());
        this.#benefitsAmount = Amount.calculateBenefitsAmount(this.#benefitsList);
        this.#badgeResult = this.#badge(this.#benefitsAmount);
    }

    #badge(benefitsAmount) {
        return benefitsAmount >= OBJECT.santaBadge
            ? '산타'
            : benefitsAmount >= OBJECT.treeBadge
                ? '트리'
                : benefitsAmount >= OBJECT.starBadge
                    ? '별'
                    : '없음';
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
import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE, OUTPUT_PREVIEW } from "./constants/messages";
import { EOL as LINE_SEPARATOR } from "os";

const OutputView = {
    printHello() {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printHello);
    },

    printPreview(date) {
        MissionUtils.Console.print(OUTPUT_PREVIEW(date));
    },

    printMenu(menuCount) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printOrderedMenu + menuCount);
    },

    printBeforeDiscount(totalAmount) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printBeforeDiscount + `${totalAmount.toLocaleString()}원`);
    },

    printPresentation(presentation) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printPresentation + presentation);
    },

    printBenefit(benefits, isEvent) {
        const output = isEvent
            ? OUTPUT_MESSAGE.printBenefit +
            (benefits.christmasDiscount !== 0 ? `크리스마스 디데이 할인: -${benefits.christmasDiscount.toLocaleString()}원` + LINE_SEPARATOR : '') +
            (benefits.weekdayDiscount !== 0 ? `평일 할인: -${benefits.weekdayDiscount.toLocaleString()}원` + LINE_SEPARATOR : '') +
            (benefits.weekendDiscount !== 0 ? `주말 할인: -${benefits.weekendDiscount.toLocaleString()}원` + LINE_SEPARATOR : '') +
            (benefits.starSpecialDiscount !== 0 ? `특별 할인: -${benefits.starSpecialDiscount.toLocaleString()}원` + LINE_SEPARATOR : '') +
            (benefits.presentationEvent[1] !== 0 ? `증정 이벤트: -${benefits.presentationEvent[1].toLocaleString()}원` : '')
            : OUTPUT_MESSAGE.printBenefit + "없음";

        MissionUtils.Console.print(output);
    },

    printAllBenefitAmount(allBenefitAmount, isEvent) {
        const output = isEvent
            ? OUTPUT_MESSAGE.printAllBenefit + `${allBenefitAmount && `-${allBenefitAmount.toLocaleString()}원`}`
            : OUTPUT_MESSAGE.printAllBenefit + "0원";

        MissionUtils.Console.print(output);
    },

    printAfterDiscount(totalAmount, benefits) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printAfterDiscount + `${(totalAmount - benefits.allBenefitAmount).toLocaleString()}원`);
    },

    printEventBadge(badge, isEvent) {
        const output = isEvent
            ? OUTPUT_MESSAGE.printEventBadge + badge
            : OUTPUT_MESSAGE.printEventBadge + "없음";

        MissionUtils.Console.print(output);
    },

    printError(error) {
        MissionUtils.Console.print(`${error}`);
    }
}

export default OutputView;
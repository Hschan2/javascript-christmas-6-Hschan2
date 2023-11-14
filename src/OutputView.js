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
        MissionUtils.Console.print(OUTPUT_MESSAGE.printBeforeDiscount + `${totalAmount}원`);
    },

    printPresentation(presentation) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printPresentation + presentation);
    },

    printBenefit(benefits, presentationAmount, isEvent) {
        const output = isEvent
            ? OUTPUT_MESSAGE.printBenefit +
            (benefits.christmasBenefit !== 0 ? `크리스마스 디데이 할인: -${benefits.christmasBenefit}원` + LINE_SEPARATOR : '') +
            (benefits.weekdayBenefit !== 0 ? `평일 할인: -${benefits.weekdayBenefit}원` + LINE_SEPARATOR : '') +
            (benefits.weekendBenefit !== 0 ? `주말 할인: -${benefits.weekendBenefit}원` + LINE_SEPARATOR : '') +
            (benefits.specialBenefit !== 0 ? `특별 할인: -${benefits.specialBenefit}원` + LINE_SEPARATOR : '') +
            (presentationAmount !== 0 ? `증정 이벤트: -${presentationAmount}원` : '')
            : OUTPUT_MESSAGE.printBenefit + "없음";

        MissionUtils.Console.print(output);
    },

    printAllBenefit(benefits, presentationAmount, isEvent) {
        const output = isEvent
            ? OUTPUT_MESSAGE.printAllBenefit + `${benefits.sumBenefit && `-${benefits.sumBenefit + presentationAmount}원`}`
            : OUTPUT_MESSAGE.printAllBenefit + "0원";

        MissionUtils.Console.print(output);
    },

    printAfterDiscount(totalAmount, allBenefitsAmount) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printAfterDiscount + `${totalAmount - allBenefitsAmount}원`);
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
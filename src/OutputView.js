import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE, OUTPUT_PREVIEW } from "./constants/messages";
import { EOL as LINE_SEPARATOR } from "os";
import { OBJECT } from "./constants/objects";

const OutputView = {
    printHello() {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printHello);
    },

    printPreview(date) {
        MissionUtils.Console.print(OUTPUT_PREVIEW(date));
    },

    printMenu(menuCount) {
        const output = Object.entries(menuCount).map(([menu, count]) => `${menu}: ${count}개`).join(LINE_SEPARATOR);
        MissionUtils.Console.print(OUTPUT_MESSAGE.printOrderedMenu + output);
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
            (benefits.christmasDiscount !== 0 ? `${OUTPUT_MESSAGE.printChristmasDiscount} -${benefits.christmasDiscount.toLocaleString()}원` + LINE_SEPARATOR : '') +
            (benefits.weekdayDiscount !== 0 ? `${OUTPUT_MESSAGE.printWeekdayDiscount} -${benefits.weekdayDiscount.toLocaleString()}원` + LINE_SEPARATOR : '') +
            (benefits.weekendDiscount !== 0 ? `${OUTPUT_MESSAGE.printWeekendDiscount} -${benefits.weekendDiscount.toLocaleString()}원` + LINE_SEPARATOR : '') +
            (benefits.starSpecialDiscount !== 0 ? `${OUTPUT_MESSAGE.printSpecialDiscount} -${benefits.starSpecialDiscount.toLocaleString()}원` + LINE_SEPARATOR : '') +
            (benefits.presentationEvent[1] !== 0 ? `${OUTPUT_MESSAGE.printPresentationDiscount} -${benefits.presentationEvent[1].toLocaleString()}원` : '')
            : OUTPUT_MESSAGE.printBenefit + OUTPUT_MESSAGE.printNothing;

        MissionUtils.Console.print(output);
    },

    printAllBenefitAmount(allBenefitAmount, isEvent) {
        const output = isEvent
            ? OUTPUT_MESSAGE.printAllBenefit + `${allBenefitAmount && `-${allBenefitAmount.toLocaleString()}원`}`
            : OUTPUT_MESSAGE.printAllBenefit + `${OBJECT.zero}원`;

        MissionUtils.Console.print(output);
    },

    printAfterDiscount(totalAmount, benefits) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printAfterDiscount + `${(totalAmount - benefits.allBenefitAmount).toLocaleString()}원`);
    },

    printEventBadge(badge, isEvent) {
        const output = isEvent
            ? OUTPUT_MESSAGE.printEventBadge + badge
            : OUTPUT_MESSAGE.printEventBadge + OUTPUT_MESSAGE.printNothing;

        MissionUtils.Console.print(output);
    },

    printError(error) {
        MissionUtils.Console.print(`${error}`);
    }
}

export default OutputView;
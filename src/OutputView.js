import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE, OUTPUT_PREVIEW } from "./constants/messages";
import { EOL as LINE_SEPARATOR } from "os";
import { EVENT_BENEFITS_RESULT, OBJECT } from "./constants/objects";

const OutputView = {
    printHello() {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printHello);
    },

    printPreview(date) {
        MissionUtils.Console.print(OUTPUT_PREVIEW(date));
    },

    printMenu(menuCount) {
        const output = Object.entries(menuCount).map(([menu, count]) => `${menu} ${count}개`).join(LINE_SEPARATOR);
        MissionUtils.Console.print(OUTPUT_MESSAGE.printOrderedMenu + output);
    },

    printBeforeDiscount(totalAmount) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printBeforeDiscount + `${totalAmount.toLocaleString()}원`);
    },

    printPresentation(presentation) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printPresentation + presentation);
    },

    printBenefit(isEvent) {
        const output = isEvent
            ? OUTPUT_MESSAGE.printBenefit +
            Object.entries(EVENT_BENEFITS_RESULT).map(([benefitPrint, amount]) => `${benefitPrint} -${amount.toLocaleString()}원`).join(LINE_SEPARATOR)
            : OUTPUT_MESSAGE.printBenefit + OUTPUT_MESSAGE.printNothing;

        MissionUtils.Console.print(output);
    },

    printAllBenefitAmount(benefits, isEvent) {
        const output = isEvent
            ? OUTPUT_MESSAGE.printAllBenefit + `${benefits.allBenefitAmount && `-${benefits.allBenefitAmount.toLocaleString()}원`}`
            : OUTPUT_MESSAGE.printAllBenefit + `${OBJECT.zero}원`;

        MissionUtils.Console.print(output);
    },

    printAfterDiscount(totalAmount, benefits) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printAfterDiscount + `${(totalAmount - benefits.allBenefitAmount + benefits.presentationEvent[1]).toLocaleString()}원`);
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
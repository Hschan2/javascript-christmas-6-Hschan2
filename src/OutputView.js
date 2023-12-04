import { MissionUtils } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGE, OUTPUT_PREVIEW } from "./constants/messages";
import { EOL as LINE_SEPARATOR } from "os";
import { OBJECT, UNITS } from "./constants/objects";
import convertThousandUnits from "./utils/convertUnit";

const OutputView = {
    printHello() {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printHello);
    },

    printPreview(date) {
        MissionUtils.Console.print(OUTPUT_PREVIEW(date));
    },

    printBenefitsList(order, benefits, isPossible) {
        this.printMenuList(order);
        this.printBeforeDiscountAmount(benefits.getAllOrderAmount());
        this.printPresentationResult(benefits.getPresentation());
        this.printBenefitResult(benefits, isPossible);
        this.printAllBenefitsAmount(benefits, isPossible);
        this.printAfterDiscountAmount(benefits);
        this.printBadgeResult(benefits, isPossible);
    },

    printMenuList(order) {
        const output = Object.entries(order).map(([menu, count]) => `${menu} ${count}${UNITS.UnitOfSize}`).join(LINE_SEPARATOR);
        MissionUtils.Console.print(OUTPUT_MESSAGE.printOrderedMenu + output);
    },

    printBeforeDiscountAmount(totalAmount) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printBeforeDiscount + convertThousandUnits(totalAmount));
    },

    printPresentationResult(presentation) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printPresentation + presentation);
    },

    printBenefitResult(EventList, isEvent) {
        const output = OUTPUT_MESSAGE.printBenefit + (isEvent ? Object.entries(EventList.getBenefitsList()).map(([benefitPrint, amount]) => amount !== 0 ? `${benefitPrint} -${convertThousandUnits(amount)}` : '').filter(Boolean).join(LINE_SEPARATOR) : OUTPUT_MESSAGE.printNothing);

        MissionUtils.Console.print(output);
    },

    printAllBenefitsAmount(benefits, isEvent) {
        const output = OUTPUT_MESSAGE.printAllBenefit + (isEvent ? `${benefits.getAllBenefitsAmount() && `-${convertThousandUnits(benefits.getAllBenefitsAmount())}`}` : convertThousandUnits(OBJECT.zero));

        MissionUtils.Console.print(output);
    },

    printAfterDiscountAmount(benefits) {
        MissionUtils.Console.print(OUTPUT_MESSAGE.printAfterDiscount + convertThousandUnits(benefits.getAfterDiscount()));
    },

    printBadgeResult(benefits, isEvent) {
        const output = OUTPUT_MESSAGE.printEventBadge + (isEvent ? benefits.getBadge() : OUTPUT_MESSAGE.printNothing);

        MissionUtils.Console.print(output);
    },

    printError(error) {
        MissionUtils.Console.print(`${error}`);
    }
}

export default OutputView;
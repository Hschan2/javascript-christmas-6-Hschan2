import { MissionUtils } from "@woowacourse/mission-utils";
import { INPUT_MESSAGE } from "./constants/messages";

const InputView = {
    async readDate() {
        const inputDate = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.whenVisitDay);
        return inputDate;
    },

    async readOrder() {
        const inputOrder = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.orderMenuAndCount);
        return inputOrder;
    }
}

export default InputView;
import { OBJECT } from "../constants/objects";

function calChristmasEventAmount(date) {
    if (date >= OBJECT.minDate && date <= OBJECT.christmasDate) {
        return OBJECT.minDiscountAmount + (OBJECT.increasedDiscountAmount * date) - 100;
    }

    return 0;
}

export default calChristmasEventAmount;
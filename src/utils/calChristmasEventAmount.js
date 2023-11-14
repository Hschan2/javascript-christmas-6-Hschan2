import { OBJECT } from "../constants/objects";

function calChristmasEventAmount(date) {
    const numberOfDate = Number(date);
    if (numberOfDate >= OBJECT.minDate && numberOfDate <= OBJECT.christmasDate) {
        return OBJECT.minDiscountAmount + (OBJECT.increasedDiscountAmount * numberOfDate) - 100;
    }

    return 0;
}

export default calChristmasEventAmount;
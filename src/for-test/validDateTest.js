import { ERROR_MESSAGE } from "../constants/messages";
import { OBJECT } from "../constants/objects";

export function isNotNumber(date) {
    if (isNaN(date)) {
        throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidNumber}`);
    }
}

export function isInvalidDate(date) {
    if (date < OBJECT.minDate || date > OBJECT.maxDate) {
        throw new Error(`${ERROR_MESSAGE.prefix} ${ERROR_MESSAGE.InvalidBetweenOneAndThirtyOne}`);
    }
}
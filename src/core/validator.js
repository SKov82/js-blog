export class Validator {
    static required(value = '') {
        return value && value.trim()
    }

    static minLen(length) {
        return value => {
            return value.length >= length
        }
    }
}
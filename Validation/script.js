class Validator {
    constructor() {
    }
    isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1) || (str.indexOf('.ru') !== -1) || (str.indexOf('.by') !== -1))
    }
    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    isPhone(str) {
        let phone = str.match(/^(?:\+375|80)\s?\(?\d\d\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})$/);
        return phone === null ? false : true;
    }
}

let validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+375(29)123-45-67'));

class ValidatorStatic {
    static isEmail(str) {
        return ((str.indexOf('@') !== -1) && (str.indexOf('.') !== -1))
    }
    
    static isDomain(str) {
        return ((str.indexOf('.com') !== -1) || (str.indexOf('.net') !== -1) || (str.indexOf('.ru') !== -1) || (str.indexOf('.by') !== -1))
    }

    static isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    static isPhone(str) {
        let phone = str.match(/^(?:\+375|80)\s?\(?\d\d\)?\s?\d\d(?:\d[\-\s]\d\d[\-\s]\d\d|[\-\s]\d\d[\-\s]\d\d\d|\d{5})$/);
        return phone === null ? false : true;
    }

}

console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+375(29)123-45-67'));
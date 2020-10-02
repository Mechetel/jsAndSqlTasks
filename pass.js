let doesContainCapitalLetter = str =>
  str.split('').some(char => (char === char.toUpperCase()));

let doesContainDigitCharacter = str =>
  (/\d/).test(str);

let doesContainPunctuationMark = str =>
  (/[.,!?:;]/).test(str);

let doesNotContainPasswordLiterally = str =>
  !(/password/i).test(str);

let doesHaveCorrectLength = str => {
  let len = str.length;
  return ((len >= 8) && (len <= 30));
}

let isValidPassword = str =>
    doesHaveCorrectLength(str)
    && doesNotContainPasswordLiterally(str)
    && doesContainPunctuationMark(str)
    && doesContainDigitCharacter(str)
    && doesContainCapitalLetter(str)

console.log(isValidPassword('passWord123!!!!'));//false
console.log(isValidPassword('turkey90AAA!'));   //true

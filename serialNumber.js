function SerialNumber(str) {
  let goal = /^\d{3}\.\d{3}\.\d{3}$/
  if (!goal.test(str)) {
    return false;
  }

  let arr = str.split(/\./).map(val => {
    return val.split('').map(val2 => {
      return parseInt(val2, 10);
    });
  });

  if ((arr[0][0] + arr[0][1] + arr[0][2]) % 2) {
    return false;
  }

  if (!((arr[1][0] + arr[1][1] + arr[1][2]) % 2)) {
    return false;
  }

  for (let i = 0, len = arr.length; i < len; i++) {
    if (Math.max(...arr[i]) !== arr[i][2]) {
      return false;
    }
  }
  return true;
}

console.log(SerialNumber('11.124.667')); //false
console.log(SerialNumber('114.568.112'));//true
console.log(SerialNumber('714.568.112'));//false

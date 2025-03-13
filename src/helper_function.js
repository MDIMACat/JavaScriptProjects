function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function parseIdNumber(saId) {
  return {
    year: parseInt(saId.substring(0, 2)),
    month: parseInt(saId.substring(2, 4)),
    day: parseInt(saId.substring(4, 6)),
    gender: parseInt(saId.substring(6, 10)),
    citizenship: parseInt(saId[10]),
    checkSum: parseInt(saId[12]),
  };
}

function isChecksumValid(saId) {
  let doubleSum = 0;
  let sum = 0;
  let numberArray = saId.split("").map((num) => parseInt(num));
  for (let i = numberArray.length - 2; i >= 0; i -= 2) {
    doubleSum = numberArray[i] * 2;
    if (doubleSum > 9) {
      doubleSum -= 9;
    }
    numberArray[i] = doubleSum;
  }
  sum = numberArray.reduce((acc, num) => acc + num);
  return sum % 10 === 0;
}

function isValidDayOfMonth(year, month, day) {
  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  if (month >= 1 && month <= 12 && day >= 1 && day <= daysInMonth[month - 1]) {
    return true;
  }
  return false;
}

function isValidDataType(year, month, day, gender, citizenship) {
  if (
    isNaN(year) ||
    isNaN(month) ||
    isNaN(day) ||
    isNaN(gender) ||
    isNaN(citizenship)
  ) {
    return false;
  }
}

function isValidLeapYear(fullYear, month, day) {
  if (month === 2 && day === 29 && !isLeapYear(fullYear) ) {
      return false;
  }
}

function isValidGender(gender) {
  if (gender < 0 || gender > 9999) {
    return false;
  }
}

function isValidCitizen(citizenship) {
  if (citizenship !== 0 && citizenship !== 1) {
    return false;
  }
}
module.exports = {
  isChecksumValid,
  isValidDayOfMonth,
  parseIdNumber,
  isValidDataType,
  isValidLeapYear,
  isValidGender,
  isValidCitizen,
};

const { errorMessage } = require("./helper_object.js");

const {
  isChecksumValid,
  isValidDayOfMonth,
  parseIdNumber,
  isValidDataType,
  isValidLeapYear,
  isValidGender,
  isValidCitizen,
} = require("./helper_function.js");

function isIdNumberValid(saId) {
  if (typeof saId !== "string") {
    throw new Error(errorMessage.invalidInput);
  }
  if (saId.length !== 13) {
    return false;
  }

  const { year, month, day, gender, citizenship } = parseIdNumber(saId);
  const fullYear = 1900 + year;

  if (
    isValidDataType(year, month, day, gender, citizenship) ||
    isValidLeapYear(fullYear, month, day) ||
    isValidGender(gender) ||
    isValidCitizen(citizenship) ||
    !isValidDayOfMonth(fullYear, month, day)
  ) {
    return false;
  }

  return isChecksumValid(saId);
}

module.exports = { isIdNumberValid };

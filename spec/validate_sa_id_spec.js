const { isIdNumberValid } = require("../src/validate_sa_id.js");
const errorMessage = require("../src/helper_object.js");

describe("isIdNumberValid", function () {
  it("should return true for a valid leap year ID", function () {
    expect(isIdNumberValid("9202295200078")).toBe(true);
  });

  it("should return true for a valid ID with valid date", function () {
    expect(isIdNumberValid("2909035800085")).toBe(true);
  });

  it("should return true for a valid ID for a female", function () {
    expect(isIdNumberValid("2001014800086")).toBe(true);
  });

  it("should throw an error when a number is passed instead of a string", function () {
    expect(() => isIdNumberValid(1234567889)).toThrowError(
      errorMessage.errorMessage.invalidInput
    );
  });

  it("should return false when the ID length is less than 13 characters", function () {
    expect(isIdNumberValid("96022950090")).toBe(false);
  });

  it("should return false when the ID length is more than 13 characters", function () {
    expect(isIdNumberValid("960229500908734")).toBe(false);
  });

  it("should return false when the ID contains a letter or special character", function () {
    expect(isIdNumberValid("960#2950090as")).toBe(false);
  });

  it("should return true for a valid date of birth in the ID", function () {
    expect(isIdNumberValid("2909035800085")).toBe(true);
  });

  it("should return false for an invalid leap year date of birth in the ID", function () {
    expect(isIdNumberValid("9502295009087")).toBe(false);
  });

  it("should return true for a valid ID for a male", function () {
    expect(isIdNumberValid("2909035800085")).toBe(true);
  });

  it("should return false for a non-citizen ID", function () {
    expect(isIdNumberValid("9602295009387")).toBe(false);
  });

  it("should return true for a South African citizen ID", function () {
    expect(isIdNumberValid("9602295200087")).toBe(true);
  });

  it("should return true for a permanent resident ID", function () {
    expect(isIdNumberValid("9602295200087")).toBe(true);
  });

  it("should return false for an ID with an invalid checksum", function () {
    expect(isIdNumberValid("9602295009087")).toBe(false);
  });
});

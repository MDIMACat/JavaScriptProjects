# SA ID Validator Code 🛂

This project provides a simple and efficient way to validate South African Identification Numbers (SA ID). It checks whether a given ID number conforms to the official format and meets the necessary validation criteria set by the Department of Home Affairs.

The validator ensures that the ID number is 13 digits long, follows the correct structure, and passes the Luhn Algorithm, which is commonly used for identifying valid IDs. This tool is especially useful for applications that require verification of South African citizen or resident identity numbers.

## Features 🌟

-   **Format validation** : Checks if the ID follows the proper 13-digit format.
-   **Luhn Algorithm**: Verifies the validity of the number using a checksum algorithm.
-   **Date of Birth**: Extracts and validates the date of birth embedded in the ID.
-   **Gender Validation**: Identifies the gender based on the ID number.
-   **Citizenship**: Verifies whether the individual is a South African citizen or permanent resident.


## Technologies Used 🛠️

- **JavaScript**: For implementing the core validation logic.
- **Jasmine**: For unit testing the validation functions to ensure accuracy and reliability.


### License 📄

This project is licensed under the MIT License.

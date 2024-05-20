// Regex
export const NUMBER_REGEX = /^[0-9]+$/;
export const ALPHABETS_REGEX = /^[^\s].([A-Za-z]+\s)*[A-Za-z]+$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;
export const NAME_REGEX =
  /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
export const PASSWORD_NOT_MATCHED = "Password doesn't match.";
export const PLEASE_CLICK_TO_UPDATE_DOCUMENT =
  "Please click here to update the documents";
export const PASSWORD_VALIDATION_MESSAGE =
  "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case character.";
export const INVALID_EMAIL = "Invalid email address";

export const PASSWORD = "password";
export const TEXT = "text";

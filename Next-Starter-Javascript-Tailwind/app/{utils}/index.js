import Cookie from "js-cookie";

export const RequiredMessage = (fieldName) => `${fieldName} is required.`;
export const ValidMessage = (fieldName) =>
  `Please enter valid ${fieldName.toLowerCase()}.`;
export const MaxLength = (fieldName, length) =>
  `${fieldName} can be up to ${length} characters long.`;
export const MinLength = (fieldName, length) =>
  `${fieldName} should be at least ${length} characters long.`;

export const setToken = (token, h = 9) => {
  const expires = new Date(Date.now() + h * 24 * 60 * 60 * 1000);
  Cookie.set("session", token, { expires });
};

export const getToken = () => {
  return Cookie.get("session");
};

export const rempveToken = () => {
  return Cookie.remove("session");
};

//packages block
import * as yup from "yup";
//constants and utils
import {
  INVALID_EMAIL,
  PASSWORD_REGEX,
  PASSWORD_VALIDATION_MESSAGE,
} from "../{constants}";
import {
  MaxLength,
  MinLength,
  RequiredMessage,
  ValidMessage,
} from "../{utils}";

const emailValidationSchema = {
  email: yup.string().email(INVALID_EMAIL).required(RequiredMessage("Email")),
};

const passwordValidationSchema = {
  password: yup.string().required(RequiredMessage("Password")),
};
const passwordAndRepeatPasswordSchema = {
  password: yup
    .string()
    .required(RequiredMessage("Password"))
    .matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE),
  Repassword: yup
    .string()
    .oneOf([yup.ref("password"), ""], "Passwords must match")
    .required("confirm your password"),
};

export const loginValidationSchema = yup.object({
  ...emailValidationSchema,
  ...passwordValidationSchema,
});

export const userBasicValidationSchema = {
  ...emailValidationSchema,
  firstName: yup.string().min(3).required(RequiredMessage("FirstName")),
  lastName: yup.string().min(3).required(RequiredMessage("LastName")),
  dateOfBirth: yup.date().required(RequiredMessage("Date of birth")),
};

export const signupValidationSchema = yup.object({
  ...userBasicValidationSchema,
  ...passwordAndRepeatPasswordSchema,
});

export const resetPasswordValidationSchema = yup.object({
  ...passwordAndRepeatPasswordSchema,
});

export const forgetPasswordSchema = yup.object({
  ...emailValidationSchema,
});

export const AddRegionValidationSchema = yup.object({
  name: yup.string().min(3).required(RequiredMessage("Name")),
  fee: yup
    .number()
    .typeError(ValidMessage("Fee"))
    .required(RequiredMessage("Fee")),
});

export const CreatePaymentPlanValidationSchema = yup.object({
  name: yup.string().min(3).required(RequiredMessage("Name")),
  fee: yup
    .number()
    .typeError(ValidMessage("Fee"))
    .required(RequiredMessage("Fee")),
  currency: yup.string().required(),
  type: yup.string().required(),
  isGlobal: yup.string().required(),
  planForMonth: yup.string().required(),
});

export const UpdateRegionValidationSchema = yup.object({
  name: yup.string().min(3),
  fee: yup
    .number()
    .typeError(ValidMessage("Fee"))
    .required(RequiredMessage("Fee")),
  isActive: yup.boolean(),
});

export const RestaurantValidationSchema = yup.object({
  name: yup.string().min(3).required(RequiredMessage("Name")),
  merchantName: yup.string().min(3).required(RequiredMessage("Name")),
  phone: yup
    .string()
    .min(3, MinLength("Phone", 3))
    .max(15, MaxLength("Phone", 15))
    .required(RequiredMessage("Phone")),
  merchantPhone: yup
    .string()
    .min(3, MinLength("Merchant Phone", 3))
    .max(15, MaxLength("Merchant Phone", 15))
    .required(RequiredMessage("Merchant Phone")),
  regionId: yup.string().required(RequiredMessage("Region")),
  country: yup.string().required(RequiredMessage("Country")),
  currency: yup.string().required(RequiredMessage("Currency")),
  ...emailValidationSchema,
  nationalId: yup.string(),
  payment: yup.object().shape({
    paymentPlanId: yup.string().required(RequiredMessage("Payment")),
  }),

  arabicName: yup.string().required(RequiredMessage("Arabic Name")),
});

export const UpdateClientValidationSchema = yup.object({
  firstName: yup.string().min(3).required(RequiredMessage("First Name")),
  lastName: yup.string().min(3).required(RequiredMessage("Last Name")),
  username: yup
    .string()
    .min(3, MinLength("User Name", 3))
    .max(15, MaxLength("User Name", 15))
    .required(RequiredMessage("User Name")),
  ...emailValidationSchema,
});

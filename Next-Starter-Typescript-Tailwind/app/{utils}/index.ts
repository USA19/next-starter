export const RequiredMessage = (fieldName: string) =>
  `${fieldName} is required.`;
export const ValidMessage = (fieldName: string) =>
  `Please enter valid ${fieldName.toLowerCase()}.`;
export const MaxLength = (fieldName: string, length: number) =>
  `${fieldName} can be up to ${length} characters long.`;
export const MinLength = (fieldName: string, length: number) =>
  `${fieldName} should be at least ${length} characters long.`;

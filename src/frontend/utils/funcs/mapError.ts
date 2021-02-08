import { FieldError } from '../../../shared/generated/graphql';

export const mapError = (arr: FieldError[]) => {
  const errors: any = {};
  arr.forEach((error) => {
    errors[error.field] = error.message;
  });
  return errors;
};

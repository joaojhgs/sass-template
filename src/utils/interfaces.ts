import { z } from 'zod';

import {
  ConfirmAccountInputValidation,
  ForgotPasswordInputValidation,
  SignInPasswordInputValidation,
  SignUpPasswordInputValidation,
  UpdatePasswordInputValidation,
} from '@/schemas/auth-schemas';

/*
 * This file contains all the interfaces and validations that are used in the application.
 * Shared between client and server side.
 */

export type ServerActionResult<T> = {
  status: 'error' | 'success';
  message?: string;
  data?: T;
};

export type ISignInPasswordInput = z.infer<
  typeof SignInPasswordInputValidation
>;

export type ISignUpPasswordInput = z.infer<
  typeof SignUpPasswordInputValidation
>;

export type IForgotPasswordInput = z.infer<
  typeof ForgotPasswordInputValidation
>;

export type IUpdatePasswordInput = z.infer<
  typeof UpdatePasswordInputValidation
>;

export type IConfirmAccountInput = z.infer<
  typeof ConfirmAccountInputValidation
>;
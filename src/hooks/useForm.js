// src/hooks/useForm.js

import { useState } from "react";
import { z } from "zod";

// -------------------------------------
// Shared validation rules
// -------------------------------------

const emailSchema = z
  .string()
  .trim()
  .email("Please enter a valid email address.");

const phoneSchema = z
  .string()
  .trim()
  .regex(
    /^\+[1-9]\d{7,14}$/,
    "Please enter a valid phone number with country code.",
  );

const identifierSchema = z
  .string()
  .trim()
  .min(1, "Email or phone number is required.")
  .refine(
    (value) =>
      emailSchema.safeParse(value).success ||
      phoneSchema.safeParse(value).success,
    {
      message: "Please enter a valid email address or phone number.",
    },
  );

const usernameSchema = z
  .string()
  .trim()
  .min(3, "Username must be at least 3 characters.")
  .max(30, "Username must not exceed 30 characters.");

const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters.");

// -------------------------------------
// Form schemas
// -------------------------------------

const signUpSchema = z.object({
  username: usernameSchema,

  identifier: identifierSchema,

  password: passwordSchema,
});

const loginSchema = z.object({
  identifier: identifierSchema,

  password: passwordSchema,
});

// -------------------------------------
// Shared useForm hook
// -------------------------------------

export function useForm(formType = "login") {
  const schema = formType === "signup" ? signUpSchema : loginSchema;

  // -----------------------------------
  // Field values
  // -----------------------------------

  const initialValues =
    formType === "signup"
      ? {
          username: "",
          identifier: "",
          password: "",
        }
      : {
          identifier: "",
          password: "",
        };

  const [values, setValues] = useState(initialValues);

  // -----------------------------------
  // Validation errors
  // -----------------------------------

  const [errors, setErrors] = useState({});

  // -----------------------------------
  // Submit state
  // -----------------------------------

  const [isSubmitting, setIsSubmitting] = useState(false);

  // -----------------------------------
  // Handle field changes
  // -----------------------------------

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((previousValues) => ({
      ...previousValues,
      [name]: value,
    }));

    // Remove the error for this field
    // once the user starts correcting it.
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: undefined,
    }));
  };

  // -----------------------------------
  // Validate the entire form
  // -----------------------------------

  const validate = () => {
    const result = schema.safeParse(values);

    if (result.success) {
      setErrors({});
      return {
        valid: true,
        data: result.data,
      };
    }

    const formattedErrors = {};

    result.error.issues.forEach((issue) => {
      const fieldName = issue.path[0];

      if (!formattedErrors[fieldName]) {
        formattedErrors[fieldName] = issue.message;
      }
    });

    setErrors(formattedErrors);

    return {
      valid: false,
      data: null,
    };
  };

  // -----------------------------------
  // Handle submit
  // -----------------------------------

  const handleSubmit = (submitFunction) => async (event) => {
    event.preventDefault();

    const result = validate();

    if (!result.valid) {
      return;
    }

    setIsSubmitting(true);

    try {
      await submitFunction(result.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  // -----------------------------------
  // Reset form
  // -----------------------------------

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,

    handleChange,
    handleSubmit,
    validate,
    reset,
  };
}

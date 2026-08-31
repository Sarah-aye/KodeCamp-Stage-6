// src/hooks/useAuth.js

import { useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
  RecaptchaVerifier,
  updateProfile,
} from "firebase/auth";

import { auth } from "../firebase";

// -------------------------------------
// Auth Hook
// -------------------------------------

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // -------------------------------------
  // Firebase auth state
  // -------------------------------------

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // -------------------------------------
  // EMAIL SIGN UP
  // -------------------------------------

  const signUpWithEmail = async (username, email, password) => {
    setError(null);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password,
      );

      // Save username to Firebase Auth profile
      await updateProfile(userCredential.user, {
        displayName: username.trim(),
      });

      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // -------------------------------------
  // PHONE SIGN UP
  //
  // Sends the SMS verification code.
  // The account is created after the
  // verification code is confirmed.
  // -------------------------------------

  const sendPhoneSignUpCode = async (
    username,
    phoneNumber,
    recaptchaContainerId,
  ) => {
    setError(null);

    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        recaptchaContainerId,
        {
          size: "invisible",
        },
      );

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber.trim(),
        recaptchaVerifier,
      );

      return {
        confirmationResult,
        username: username.trim(),
      };
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // -------------------------------------
  // VERIFY PHONE SIGN UP
  // -------------------------------------

  const verifyPhoneSignUpCode = async (
    confirmationResult,
    verificationCode,
    username,
  ) => {
    setError(null);

    try {
      const userCredential = await confirmationResult.confirm(
        verificationCode.trim(),
      );

      // Save username to Firebase Auth profile
      await updateProfile(userCredential.user, {
        displayName: username.trim(),
      });

      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // -------------------------------------
  // MAIN SIGN UP
  //
  // Determines whether the identifier
  // is an email or phone number.
  //
  // Validation is NOT done here.
  // useForm handles validation.
  // -------------------------------------

  const signUp = async (
    username,
    identifier,
    password,
    recaptchaContainerId,
  ) => {
    setError(null);

    const cleanIdentifier = identifier.trim();

    // Email signup
    //
    // We don't validate the email here.
    // useForm has already validated it.
    if (cleanIdentifier.includes("@")) {
      return signUpWithEmail(username, cleanIdentifier, password);
    }

    // Phone signup
    return sendPhoneSignUpCode(username, cleanIdentifier, recaptchaContainerId);
  };

  // -------------------------------------
  // EMAIL LOGIN
  // -------------------------------------

  const logInWithEmail = async (email, password) => {
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim().toLowerCase(),
        password,
      );

      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // -------------------------------------
  // PHONE LOGIN
  // -------------------------------------

  const sendPhoneLoginCode = async (phoneNumber, recaptchaContainerId) => {
    setError(null);

    try {
      const recaptchaVerifier = new RecaptchaVerifier(
        auth,
        recaptchaContainerId,
        {
          size: "invisible",
        },
      );

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber.trim(),
        recaptchaVerifier,
      );

      return confirmationResult;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // -------------------------------------
  // VERIFY PHONE LOGIN
  // -------------------------------------

  const verifyPhoneLoginCode = async (confirmationResult, verificationCode) => {
    setError(null);

    try {
      const userCredential = await confirmationResult.confirm(
        verificationCode.trim(),
      );

      return userCredential.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // -------------------------------------
  // MAIN LOGIN
  //
  // Email → email + password
  // Phone → phone + SMS code
  //
  // Validation is handled by useForm.
  // -------------------------------------

  const logIn = async (identifier, password, recaptchaContainerId) => {
    setError(null);

    const cleanIdentifier = identifier.trim();

    // Email login
    if (cleanIdentifier.includes("@")) {
      return logInWithEmail(cleanIdentifier, password);
    }

    // Phone login
    return sendPhoneLoginCode(cleanIdentifier, recaptchaContainerId);
  };

  // -------------------------------------
  // LOGOUT
  // -------------------------------------

  const logOut = async () => {
    setError(null);

    try {
      await signOut(auth);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  // -------------------------------------
  // RETURN
  // -------------------------------------

  return {
    user,

    signUp,
    verifyPhoneSignUpCode,

    logIn,
    verifyPhoneLoginCode,

    logOut,

    loading,
    error,
  };
}

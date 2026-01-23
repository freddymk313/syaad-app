// i18n.js
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

const i18n = new I18n();

i18n.translations = {
  en: {
    welcome: "Welcome",
    usernameOrEmail: "Username or Email",
    password: "Password",
    logIn: "Log In",
    forgotPassword: "Forgot Password?",
    signUp: "Sign Up",
    useFingerprint: "Use Fingerprint To Access",
    orSignInWith: "Or sign in with",
    dontHaveAccount: "Don't have an account?",
  },
  fr: {
    welcome: "Bienvenue",
    usernameOrEmail: "Nom d'utilisateur ou Email",
    password: "Mot de passe",
    logIn: "Se connecter",
    forgotPassword: "Mot de passe oublié ?",
    signUp: "S'inscrire",
    useFingerprint: "Utiliser l'empreinte digitale",
    orSignInWith: "Ou connectez-vous avec",
    dontHaveAccount: "Vous n'avez pas de compte ?",
  },
  es: {
    welcome: "Bienvenido",
    usernameOrEmail: "Nombre de usuario o correo",
    password: "Contraseña",
    logIn: "Iniciar sesión",
    forgotPassword: "¿Olvidaste tu contraseña?",
    signUp: "Regístrate",
    useFingerprint: "Usar huella digital",
    orSignInWith: "O inicia sesión con",
    dontHaveAccount: "¿No tienes una cuenta?",
  },
};

i18n.locale = Localization.locale.split("-")[0]; // ex: fr, en
i18n.fallbacks = true;

export default i18n;

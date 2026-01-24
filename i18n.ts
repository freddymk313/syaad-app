// i18n.js
// import { getLocales } from "expo-localization";
// import { I18n } from "i18n-js";

// const i18n = new I18n({
//   en: {
//     welcome: "Welcome",
//     usernameOrEmail: "Username or Email",
//     password: "Password",
//     logIn: "Log In",
//     forgotPassword: "Forgot Password?",
//     signUp: "Sign Up",
//     useFingerprint: "Use Fingerprint To Access",
//     orSignInWith: "Or sign in with",
//     dontHaveAccount: "Don't have an account?",
//     profile: "Profile",
//   },
//   fr: {
//     welcome: "Bienvenue",
//     usernameOrEmail: "Nom d'utilisateur ou Email",
//     password: "Mot de passe",
//     logIn: "Se connecter",
//     forgotPassword: "Mot de passe oublié ?",
//     signUp: "S'inscrire",
//     useFingerprint: "Utiliser l'empreinte digitale",
//     orSignInWith: "Ou connectez-vous avec",
//     dontHaveAccount: "Vous n'avez pas de compte ?",
//     profile: "Profil",
//   },
//   es: {
//     welcome: "Bienvenido",
//     usernameOrEmail: "Nombre de usuario o correo",
//     password: "Contraseña",
//     logIn: "Iniciar sesión",
//     forgotPassword: "¿Olvidaste tu contraseña?",
//     signUp: "Regístrate",
//     useFingerprint: "Usar huella digital",
//     orSignInWith: "O inicia sesión con",
//     dontHaveAccount: "¿No tienes una cuenta?",
//     profile: "Perfil",
//   },
// });

// // ✅ NOUVELLE FAÇON (Expo actuel)
// const deviceLanguage = getLocales()[0]?.languageCode ?? "fr";
// i18n.locale = deviceLanguage;

// i18n.enableFallback = true;

// export default i18n;

import { I18n } from "i18n-js";
import { getLocales } from "expo-localization";

const i18n = new I18n({
  en: {
    profile: "Profile",
  },
  fr: {
    profile: "Profil",
  },
  es: {
    profile: "Perfil",
  },
});

i18n.enableFallback = true;
i18n.locale = getLocales()[0]?.languageCode ?? "en";

export default i18n;


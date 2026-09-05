// Registration call-to-actions: the hero "Zgłoś uczestnictwo" button and the
// RegistrationCTA section at the bottom of the home page, both pointing at the Elkardia
// form. Flip to false to hide them again if sign-ups close or pause.
//
// The /rejestracja → elkardia.pl redirect in vercel.json is left in place either way, so
// anyone holding a direct link still gets through.
export const REGISTRATION_OPEN = true;

export const REGISTRATION_URL = 'https://elkardia.pl/rftime2026-rejestracja/';

// The binding privacy policy for registration data lives with the form, on elkardia.pl.
// The /polityka-prywatnosci page here covers only what this informational site itself
// does (local storage, embedded video, hosting) and links out to that one.
export const POLICY_URL = 'https://elkardia.pl/rftime-2026-polityka-prywatnosci/';

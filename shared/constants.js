// ============================================================
//  shared/constants.js — Bhukkad Food Chaska
//  Naye shop ke liye SIRF YEH FILE BADLO
// ============================================================

export const SHOP = {
  id:           "bhukkad-food-chaska",
  name:         "Bhukkad Food Chaska",
  tagline:      "Bhookh Lagi? Chaska Lao!",
  location:     "Jaipur",
  logoEmoji:    "🍽️",
  primaryColor: "#E85D04",
  accentColor:  "#F48C06",

  whatsapp:     "919950033888",
  instagram:    "https://www.instagram.com/bhukkad_food_chaska",
  zomato:       "https://zomato.com/YOUR_LINK",
  googleReview: "https://maps.app.goo.gl/DwXvXNNu5KxZpNwZ8",
  appLink:      "https://bhukkad.vishtechfixes.com",
};

// ── ADMIN ──────────────────────────────────────────────────
export const ADMIN = {
  defaultPassword: "bfc2025",
};

// ── POINTS CONFIG ───────────────────────────────────────────
export const POINTS = {
  welcome:       2,
  perVisit:      2,
  instagram:     2,
  googleReview:  3,
  whatsapp:      2,
  zomato:        2,
};

// ── OFFER DEFAULTS ──────────────────────────────────────────
export const DEFAULTS = {
  welcomeDiscPct:  2,
  visitGoal:       30,
  visitReward:     "FREE ITEM",
  refSteps:        [50, 120, 200],
  winbackDays:     30,
  lowStockAlert:   5,
  billPointsMsg:   true,
};

// ── COUPON PREFIXES ─────────────────────────────────────────
export const COUPON = {
  welcome:  "BFC",
  birthday: "BDAY",
  visit:    "VIS",
  special:  "SPEC",
};

// ── MENU CATEGORIES ─────────────────────────────────────────
export const CATEGORIES = [
  "Tea & Coffee",
  "Shake",
  "Momos",
  "Chowmein",
  "Snacks",
  "Maggies",
  "Dosa",
  "Burger",
  "Pizza",
  "Sandwich",
  "Other",
];

// ── FIRESTORE COLLECTION NAMES ──────────────────────────────
export const COLLECTIONS = {
  users:    "users",
  bills:    "bills",
  menu:     "menu",
  settings: "settings",
  shop:     "shop",
  feedback: "feedback",
};

// ── LOCALSTORAGE KEYS (offline fallback) ────────────────────
export const LS = {
  users:    "bfc_users",
  bills:    "bfc_bills",
  menu:     "bfc_menu",
  settings: "bfc_settings",
  shop:     "bfc_shop",
  feedback: "bfc_feedback",
  theme:    "bfc_theme",
  adminPw:  "bfc_admin_pass",
  current:  "bfc_current",
};



# AgriHydra Website — Google Form Setup Guide

Your website now redirects visitors to three Google Forms instead of using
built-in forms. Follow these steps to activate them.

## Step 1 — Extract the ZIP
Unzip the file. You should see:
```
AgriHydra/
├── index.html
├── css/style.css
├── js/script.js
└── SETUP_GUIDE.md   (this file)
```

## Step 2 — Create your 3 Google Forms
Create these forms in Google Forms (you can copy the fields from the old
built-in forms as a starting point):
1. **Farmer Registration**
2. **Polyhouse & Irrigation Project Enquiry**
3. **Partner Registration**

Copy each form's share link (the "Send" → link icon URL).

## Step 3 — Paste the Farmer Registration URL
Open `js/script.js` in a text editor. Near the very top you'll see:
```javascript
const GOOGLE_FORMS = {
  farmer:  "PASTE_FARMER_GOOGLE_FORM_URL_HERE",
  project: "PASTE_POLYHOUSE_GOOGLE_FORM_URL_HERE",
  partner: "PASTE_PARTNER_GOOGLE_FORM_URL_HERE"
};
```
Replace `PASTE_FARMER_GOOGLE_FORM_URL_HERE` with your Farmer Registration
Google Form link (keep the quote marks).

## Step 4 — Paste the Polyhouse & Irrigation Project URL
In the same block, replace `PASTE_POLYHOUSE_GOOGLE_FORM_URL_HERE` with your
Polyhouse & Irrigation Project Enquiry Google Form link.

## Step 5 — Paste the Partner Registration URL
Still in the same block, replace `PASTE_PARTNER_GOOGLE_FORM_URL_HERE` with
your Partner Registration Google Form link.

## Step 6 — Two more spots in index.html
Two buttons link directly to Google Forms from `index.html` (search for
`PASTE_` in the file to find them):
- The **"Register as a Farmer"** button on the Contact page
  → replace `PASTE_FARMER_GOOGLE_FORM_URL_HERE`
- The **"Partner With Us"** button on the new Partner page
  → replace `PASTE_PARTNER_GOOGLE_FORM_URL_HERE`

(Use the same URLs you used in Step 3–5.)

## Step 7 — Save the files

## Step 8 — Test all three flows
1. Open `index.html` in a browser.
2. Click **"Register as a Farmer"** on the Contact page → should open your
   Farmer Registration Google Form in a new tab.
3. Click **"Register Interest"** (or any polyhouse/service card, or "Book
   Consultation") → should open your Polyhouse & Irrigation Project Google
   Form in a new tab.
4. Click **"Partner With Us"** (nav bar or the new Partner page) → should
   open your Partner Registration Google Form in a new tab.

## Deploying
Upload the whole `AgriHydra` folder (keeping `index.html`, `css/`, and
`js/` together, in the same relative positions) to your web host.

---

## Summary of what changed
- Removed the old built-in registration forms (Contact page form, the
  per-service "Register Interest" popup form, and the "Book Consultation"
  popup form) and their JS submission logic (`submitContact`,
  `submitServiceRegistration`, `submitConsultationForm`, and their related
  helper functions).
- Added a centralized `GOOGLE_FORMS` config at the top of `js/script.js`
  so all three URLs live in one obvious place.
- "Register Interest" / service & polyhouse cards / "Book Consultation"
  buttons now redirect to your Google Forms instead of opening the old
  popup — no other button behavior or design was changed.
- Rewrote the Contact page's "Registration Form" card into a concise
  "Farmer Registration" summary with a "Register as a Farmer" button.
- Added a new "Partner With Us" page (linked from the main nav, mobile
  menu, and footer) describing FPC, dealer/distributor, retailer and
  exporter partnerships, based on the pitch deck, with a "Partner With Us"
  button.
- Split the original single HTML file into `index.html`, `css/style.css`,
  and `js/script.js`.
- Preserved the existing design, colors, layout, animations, images,
  navigation structure and all unrelated content and functionality
  (ROI calculator, government schemes modal, language toggle, dark mode,
  newsletter signup, FAQ accordion, etc.) exactly as before.

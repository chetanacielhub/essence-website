# ESSENCE 2027 — Google Apps Script Deployment Guide

This guide explains how to set up the Google Sheets database and deploy the Google Apps Script Web App for **ESSENCE 2027**.

---

## Prerequisites
- A Google Account with Google Drive access (preferably an official CiEL account, e.g., `ciel@chetana.org.in`).
- 5 minutes to complete the one-time deployment.

---

## Step 1: Create the Google Spreadsheet
1. Open [Google Sheets](https://sheets.new) in your browser.
2. Rename the spreadsheet to: `ESSENCE 2027 - Master Registrations`.
3. Rename the first tab from `Sheet1` to: `Registrations`.

---

## Step 2: Open Apps Script Editor
1. In the Google Sheets menu, click **Extensions** → **Apps Script**.
2. Rename the Apps Script project (top left) to: `ESSENCE 2027 Registration API`.
3. In the script editor, delete any code inside `Code.gs` and replace it entirely with the contents of [`google-apps-script/Code.js`](./Code.js).
4. Click **Save** (disk icon or `Ctrl + S`).

---

## Step 3: Run One-Click Initialization (`setupSheet`)
1. In the function dropdown on the toolbar, select `setupSheet`.
2. Click **Run**.
3. Google will ask for authorization:
   - Click **Review permissions**.
   - Select your Google account.
   - Click **Advanced** (at the bottom) → Click **Go to ESSENCE 2027 Registration API (unsafe)**.
   - Click **Allow**.
4. Check your Google Sheet: all 31 column headers will now be beautifully formatted in Royal Navy and Gold, with frozen headers and dropdown validations on Payment & Review Status!

---

## Step 4: Deploy as a Web App
1. At the top-right of the Apps Script window, click the blue **Deploy** button → **New deployment**.
2. Click the gear icon (Select type) next to "Select type" and choose **Web app**.
3. Configure the deployment settings:
   - **Description:** `ESSENCE 2027 Registration API v1`
   - **Execute as:** `Me (your email address)` *(Crucial: This ensures submissions can write to your sheet without requiring student Google logins).*
   - **Who has access:** `Anyone` *(Crucial: Allows the Next.js server to submit student registrations).*
4. Click **Deploy**.
5. Copy the generated **Web App URL**. It will look like:
   ```text
   https://script.google.com/macros/s/AKfycbx.../exec
   ```

---

## Step 5: Configure Next.js Environment Variable
1. In your local or production environment (`.env.local` or Vercel Environment Variables), add:
   ```env
   GOOGLE_APPS_SCRIPT_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
   ```
2. Restart your Next.js server (`npm run build` or `npm run dev`).
3. Your custom registration portal is now live and writing directly to Google Sheets!

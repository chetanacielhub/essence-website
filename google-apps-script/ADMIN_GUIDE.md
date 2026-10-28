# ESSENCE 2027 — CiEL Administrator Guide: Registration Management

This guide provides operational instructions for CiEL team members and coordinators managing student registrations in Google Sheets.

---

## 1. Accessing & Navigating the Sheet
- **File Name:** `ESSENCE 2027 - Master Registrations`
- Only authorized CiEL faculty and coordinators should have **Editor** access.
- Always keep the sheet private (never share with "Anyone with the link can view").

---

## 2. Searching & Filtering Registrations

### Create Temporary Filter Views (Recommended)
To filter registrations without altering the view for other team members:
1. Click **Data** → **Filter views** → **Create new filter view**.
2. Rename the filter view (e.g., `FinTech Track Submissions` or `Pending UTRs`).

### Common Filters:
- **By Payment Status (Column C):**
  - Click the filter icon on Column C → Check only `Pending UTR Verification`.
  - Match the student's UTR (Column AC) against your bank / UPI merchant statement.
  - Once verified, update the cell dropdown to `Payment Verified`.
- **By Innovation Track (Column W):**
  - Filter by `AI / ML`, `CleanTech`, `AgriTech`, or `Other: [Custom]`.
- **By College / Institute (Column I):**
  - Search or sort alphabetically to view all teams from a specific campus.

---

## 3. Operational Workflow (Status Progression)

| Stage | Column C (Payment Status) | Column D (Review Status) | Action Required |
|:---:|:---:|:---:|---|
| **New Submission** | `Pending UTR Verification` | `Under Review` | Verify bank UTR in merchant portal. |
| **Payment Confirmed** | `Payment Verified` | `Under Review` | Send receipt or confirmation if requested. |
| **Screened In** | `Payment Verified` | `Screened In` | Idea meets basic eligibility criteria. |
| **Shortlisted** | `Payment Verified` | `Shortlisted for Mentorship` | Selected for mentor matching phase. |
| **Grand Finalist** | `Payment Verified` | `Finalist` | Stall allocated for Bandra exhibition. |
| **Disqualified / Invalid** | `Payment Failed / Mismatched` | `Not Selected` | Contact team leader if UTR is invalid. |

---

## 4. Exporting to Microsoft Excel
1. Click **File** → **Download** → **Microsoft Excel (.xlsx)**.
2. Store the export in a password-protected administrative Drive folder for historical record-keeping.

---

## 5. Automated Backup & Version History
- **Version History:** Google Sheets automatically tracks every edit. Click **File** → **Version history** → **See version history** to restore any prior version or identify who modified a cell.
- **Weekly Snapshot:** Every Friday during the registration window, right-click the `Registrations` tab at the bottom and choose **Duplicate** (rename to `Backup_YYYYMMDD`).

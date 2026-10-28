# ESSENCE 2027 — Google Sheets Registration Schema

This document defines the exact column structure of the master registration Google Sheet for **ESSENCE 2027**, organized by **Chetana's Centre for Innovation & Entrepreneurship Learning (CiEL)**.

## Sheet Properties
- **Sheet Tab Name:** `Registrations`
- **Frozen Header:** Row 1 (Header row frozen; Column A frozen for scroll tracking)
- **Header Theme:** Royal Navy (`#0A1E3D`) background with Gold (`#D4AF5A`) bold typography.

---

## Column Specification Table

| Col | Letter | Field Name | Data Type | Permitted Values / Format | Description / Purpose |
|:---:|:---:|---|---|---|---|
| 1 | **A** | `Registration ID` | Text (Unique) | `ESS-2027-[A-Z0-9]{6}` | Permanent system identifier assigned to the submission. |
| 2 | **B** | `Submission Timestamp` | ISO DateTime | `YYYY-MM-DDTHH:mm:ss.sssZ` | Server-recorded UTC timestamp of registration. |
| 3 | **C** | `Payment Status` | Dropdown | `Pending UTR Verification`<br>`Payment Verified`<br>`Payment Failed / Mismatched` | Operational field for CiEL accounts team. |
| 4 | **D** | `Review Status` | Dropdown | `Under Review`<br>`Screened In`<br>`Shortlisted for Mentorship`<br>`Finalist`<br>`Not Selected` | Operational field for the evaluation committee. |
| 5 | **E** | `Team Leader Name` | Text | Free text (sanitized) | Full name of the primary applicant / team leader. |
| 6 | **F** | `Team Leader Email` | Email | `user@domain.com` | Official email address for all notifications. |
| 7 | **G** | `Team Leader Contact` | Text | 10-digit mobile number | WhatsApp / phone contact. |
| 8 | **H** | `Participant Category` | Text | `Chetana Institute Student`<br>`Other Institute Student` | Used to verify fee tier (₹200 vs ₹500). |
| 9 | **I** | `College / Institute` | Text | Free text | Affiliated college name. |
| 10 | **J** | `Course / Programme` | Text | `B.Tech / B.E.`, `BMS`, etc. | Academic degree stream. |
| 11 | **K** | `Pursuing Level` | Text | `Under-Graduate`<br>`Post-Graduate`<br>`Other` | Degree category. |
| 12 | **L** | `Year of Study` | Text | `1st Year`, `2nd Year`, `3rd Year`, `4th Year` | Academic year level. |
| 13 | **M** | `Department` | Text | Free text (optional) | Specialization / Engineering Branch. |
| 14 | **N** | `Team Name` | Text | Free text (or `Solo Entry`) | Chosen team identity. |
| 15 | **O** | `Participation Type` | Text | `team` or `solo` | Registration structure. |
| 16 | **P** | `Member 2 Name` | Text | Free text | Name of teammate 2 (required for teams). |
| 17 | **Q** | `Member 2 Email` | Email | Email address | Contact email for teammate 2. |
| 18 | **R** | `Member 3 Name` | Text | Free text (optional) | Name of teammate 3. |
| 19 | **S** | `Member 3 Email` | Email | Email address (optional) | Contact email for teammate 3. |
| 20 | **T** | `Member 4 Name` | Text | Free text (optional) | Name of teammate 4. |
| 21 | **U** | `Member 4 Email` | Email | Email address (optional) | Contact email for teammate 4. |
| 22 | **V** | `Project Title` | Text | Free text | Working title of the innovation. |
| 23 | **W** | `Innovation Track` | Text | 15 Tracks or `Other: [Custom]` | Innovation domain / exploration category. |
| 24 | **X** | `Problem Statement` | Text | Paragraph | Problem definition and beneficiaries. |
| 25 | **Y** | `Proposed Solution` | Text | Paragraph | Proposed technical / entrepreneurial solution. |
| 26 | **Z** | `Project Summary` | Text | Paragraph | Executive summary of idea and prototype plan. |
| 27 | **AA** | `Pitch Deck / PPT Link` | URL / Drive Link | Valid URL | Link to deck or uploaded Drive file. |
| 28 | **AB** | `Fee Paid (INR)` | Number | `200` or `500` | Registration fee expected based on category. |
| 29 | **AC** | `UTR / Transaction No.` | Text | Bank UTR (e.g., `4289XXXXXXXX`) | Bank reference for fee reconciliation. |
| 30 | **AD** | `Payment Receipt Link` | URL / Drive Link | Valid URL | Link to screenshot / receipt. |
| 31 | **AE** | `Idempotency Key` | Text | UUID / Hash | Prevents accidental duplicate submissions. |

---

## Security & Anti-Formula Injection Notes
- All values written to the sheet undergo sanitization in Google Apps Script.
- Any text starting with `=`, `+`, `-`, or `@` is prefixed with an apostrophe (`'`) so Google Sheets treats it strictly as literal text, completely eliminating Spreadsheet Formula Injection attacks.

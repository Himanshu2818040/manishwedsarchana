# Google Sheets RSVP setup

1. Create or open a Google Sheet.
2. Open **Extensions > Apps Script**.
3. Replace the script editor contents with `google-apps-script.gs` from this project.
4. Save and run `doPost` once to grant Spreadsheet permissions.
5. Choose **Deploy > New deployment**.
6. Select **Web app**.
7. Set **Execute as** to `Me` and **Who has access** to `Anyone`.
8. Deploy and copy the Web app URL.
9. In `index.html`, replace:
   ```js
   const GOOGLE_SHEET_WEB_APP_URL = '';
   ```
   with:
   ```js
   const GOOGLE_SHEET_WEB_APP_URL = 'YOUR_WEB_APP_URL';
   ```
10. Reload the website and submit an RSVP test entry.

The script creates an `RSVP` sheet with columns: Timestamp, Name, Status, Guests, and Blessing.

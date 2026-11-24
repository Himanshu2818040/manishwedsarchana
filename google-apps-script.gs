/* Google Apps Script for wedding invitation RSVP submissions
   1. Create a Google Sheet.
   2. Open Extensions > Apps Script.
   3. Paste this code.
   4. Deploy > New deployment > Web app.
   5. Set Execute as: Me.
   6. Set Who has access: Anyone.
   7. Copy the Web app URL into GOOGLE_SHEET_WEB_APP_URL in index.html.
*/

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('RSVP')
      || SpreadsheetApp.getActiveSpreadsheet().insertSheet('RSVP');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Status', 'Guests', 'Blessing']);
    }

    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.status || '',
      data.guests || '',
      data.message || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

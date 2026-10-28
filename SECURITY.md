# Security notes

This repository stores a Google Apps Script application that processes police personnel records and shift schedules. Keep this repository PRIVATE and restrict who can access the Apps Script web app and Google Sheet.

Before public distribution, audit client-side seed data, hard-coded identifiers, the Google Sheet link, access permissions, and `apiAll()`/`apiReplaceAll()` authorization. A public GitHub Pages deployment of these raw sources is not safe.

# GitHub Pages launcher — ระบบเวรสายตรวจ

**นี่คือหน้าทางเข้าเท่านั้น ไม่ใช่ตัวเว็บแอปหลัก**

## ติดตั้ง GitHub Pages

1. สร้าง GitHub Repository แยกต่างหาก (Public หากใช้แผน GitHub Free)
2. อัปโหลด `index.html` และ `.nojekyll` ไปที่รากของ repository
3. เปิด `Settings > Pages > Build and deployment`
4. ตั้ง `Source: Deploy from a branch`, `Branch: main`, `Folder: /(root)` แล้ว Save
5. เข้า URL ที่ GitHub Pages ให้มา
6. กรอก URL Google Apps Script `/exec` ของระบบจริงในหน้าทางเข้า 1 ครั้งต่ออุปกรณ์

## ข้อควรระวัง

- GitHub Pages เป็นเว็บสาธารณะ แม้ repo ของบางแผนจะเป็น Private ก็ตาม
- อย่านำไฟล์ `Code.gs` หรือ `index.html` ของเว็บแอปจริงขึ้น Pages เพราะมีข้อมูลกำลังพลและรายละเอียดระบบ
- หน้า Launcher นี้ไม่มีข้อมูลกำลังพล, spreadsheet ID หรือ API key
- Apps Script ต้องจำกัดสิทธิ์เข้าถึงเฉพาะผู้ได้รับอนุญาต และควรตรวจสิทธิ์ที่ฝั่งเซิร์ฟเวอร์ก่อนอ่าน/เขียนข้อมูล

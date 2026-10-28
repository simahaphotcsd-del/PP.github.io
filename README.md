# ระบบเวรสายตรวจ สภ.ศรีมหาโพธิ — GitHub Pages + Google Sheet เดิม

## สิ่งที่ชุดนี้ทำ

- GitHub Pages เป็นหน้าเข้าระบบแบบอัตโนมัติ
- เว็บแอปจริงทำงานผ่าน **Google Apps Script** ซึ่งเชื่อม **Google Sheet เดิม**
- ไม่ต้องกรอกลิงก์ /exec ทุกเครื่องอีกต่อไป: ตั้งเพียงครั้งเดียวที่ `config.js`
- หน้า Dashboard, ปฏิทิน, เวรตู้, จัดเวร, Export Word ใช้ตัวเว็บแอปหลัก v15.2 เดิม
- หน้า GitHub Pages ไม่เก็บสำเนารายชื่อกำลังพล หรือซิงก์ข้อมูลลับลง public site

## วิธีติดตั้ง

1. ตรวจสอบ Apps Script ตัวจริงให้ Deploy เป็น Web app และมี URL ลงท้าย `/exec`
2. ตรวจสอบสิทธิ์ Apps Script และ Google Sheet ให้เฉพาะคนที่ได้รับอนุญาต (หลีกเลี่ยง Anyone ที่ไม่ต้องเข้าสู่ระบบ)
3. เปิดไฟล์ `config.js` และใส่ URL `/exec` ใน `webAppUrl: 'https://script.google.com/macros/s/.../exec'`
4. อัปโหลด `index.html`, `app.js`, `config.js`, `.nojekyll` ไปที่ GitHub Pages repository (หรือแก้ไฟล์ผ่าน GitHub แล้ว Commit)
5. GitHub repository > Settings > Pages > Build and deployment > Deploy from a branch > main > /(root)
6. เปิดลิงก์ GitHub Pages — เว็บจะพาไป Apps Script โดยอัตโนมัติ และอ่าน/เขียนข้อมูลใน Google Sheet ผ่านระบบเดิม

## แก้ URL ภายหลัง

แก้ `config.js` เพียงไฟล์เดียวใน GitHub แล้ว Commit Changes; ทุกเครื่องใช้ลิงก์ใหม่เมื่อเปิดเว็บไซต์อีกครั้ง

## ข้อจำกัดสำคัญ

นี่เป็นโซลูชัน **ใช้ฐานข้อมูล Google Sheet เดิม** โดยเว็บแอปจริงยังโฮสต์บน Apps Script ไม่ใช่การย้ายหน้า Dashboard/Backend ทั้งหมดมาทำงานบน GitHub Pages หากต้องการให้หน้าจัดเวรทำงานที่ URL GitHub Pages โดยตรง ต้องพัฒนา API แบบข้ามโดเมนที่ยืนยันตัวตนและตรวจสิทธิ์ฝั่งเซิร์ฟเวอร์ หรือย้ายไปใช้ฐานข้อมูลที่รองรับ frontend โดยตรง เช่น Supabase (พร้อม Auth/RLS) ห้ามเปิด Google Sheet API แบบสาธารณะเพื่อแก้ปัญหา CORS

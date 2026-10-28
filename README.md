# สภ.ศรีมหาโพธิ — ระบบจัดเวรสายตรวจ (v15.2)

## สำคัญ: Repository นี้ต้องเป็น PRIVATE

ซอร์สโค้ดนี้มีข้อมูลเกี่ยวกับกำลังพล การจัดเวร และตัวระบุ Google Sheet ภายในองค์กร **ห้ามอัปโหลดไปยัง GitHub Public Repository หรือเผยแพร่ Code.gs / index.html เป็น GitHub Pages** ก่อนผ่านการตรวจข้อมูลลับและออกแบบระบบยืนยันตัวตน

## สถาปัตยกรรมปัจจุบัน

- `index.html`: หน้าเว็บแอปแบบครบ (Dashboard, ตารางเวร, เวรตู้สายตรวจตำบล, ระบบออกคำสั่ง, ฯลฯ)
- `Code.gs`: ฝั่งเซิร์ฟเวอร์ Apps Script ที่เชื่อม Google Sheets และใช้ `google.script.run`
- Google Sheet: ฐานข้อมูลจริง (ไม่ได้รวมอยู่ใน repository)
- IndexedDB: แคชข้อมูลในเบราว์เซอร์ผู้ใช้

**GitHub Pages ไม่รองรับ `google.script.run`** จึงไม่สามารถเปิด `index.html` ไฟล์นี้โดยตรงบน Pages แล้วใช้งานระบบซิงก์ Google Sheet เหมือนเดิมได้

## วิธีเก็บซอร์สโค้ดขึ้น GitHub (แบบปลอดภัย)

1. ลงชื่อเข้าใช้ [github.com](https://github.com) > New repository
2. ตั้งชื่อ เช่น `srimahapho-patrol-private` และเลือก **Private** ก่อน Create repository
3. เลือก Add file > Upload files และอัปโหลด `index.html`, `Code.gs`, `README.md`, `.gitignore`
4. กด Commit changes
5. **ไม่ต้องเปิด Settings > Pages** สำหรับ repo นี้

## วิธีรันระบบจริง

1. เปิด Google Apps Script โปรเจ็กต์เดิมที่เชื่อม Google Sheet อยู่
2. คัดลอก `Code.gs` และ `index.html` เข้า Apps Script เดิม (ไฟล์ HTML ชื่อ `index`)
3. Save > Deploy > Manage deployments > Edit > New version > Deploy
4. ใช้ URL `/exec` ของ Apps Script เดิมเป็นทางเข้าระบบ
5. ตรวจสิทธิ์ Access ในการ Deploy ให้เฉพาะบุคคลที่ได้รับอนุญาตเข้าถึงข้อมูลกำลังพล

> ระวัง: `Code.gs` มีฟังก์ชันอ่านข้อมูลหลายแท็บและเขียนทับข้อมูลทั้งหมด (`apiReplaceAll`) อย่า Deploy แบบ Anyone/ไม่จำกัดผู้ใช้ เมื่อระบบยังไม่มีการยืนยันตัวตนและตรวจสิทธิ์ฝั่งเซิร์ฟเวอร์ที่รัดกุม

## หากต้องการลิงก์ทางเข้าจาก GitHub Pages

ให้ใช้ **ชุด GitHub Pages Launcher แยกต่างหาก** ที่ไม่รวมข้อมูลกำลังพล, `Code.gs`, Google Sheet ID หรือ URL `/exec` ที่มีสิทธิ์เข้าถึงข้อมูล  ในหน้า Launcher ผู้ใช้กรอก URL `/exec` บนเครื่องของตนเองหนึ่งครั้ง

## เวอร์ชัน

อ้างจากไฟล์ `Srimahapho_Patrol_Online_v15_2_PostDashboard.zip` ซึ่งมี Dashboard เวรตู้สายตรวจตำบลแล้ว

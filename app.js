(() => {
  'use strict';
  const status = document.getElementById('status');
  const setup = document.getElementById('setup');
  const link = document.getElementById('openApp');
  const config = window.PATROL_APP_CONFIG || {};
  function validAppsScriptUrl(input) {
    try {
      const u = new URL(String(input || '').trim());
      if (u.protocol !== 'https:' || u.hostname !== 'script.google.com') return null;
      if (!/^\/macros\/s\/[A-Za-z0-9_-]+\/exec\/?$/.test(u.pathname)) return null;
      return u.href;
    } catch (_) { return null; }
  }
  const url = validAppsScriptUrl(config.webAppUrl);
  if (!url) {
    status.innerHTML = '<span>ยังไม่ได้กำหนดลิงก์ Apps Script</span> · โปรดให้ผู้ดูแลตั้งค่า config.js';
    setup.style.display = 'block';
    return;
  }
  link.href = url;
  link.hidden = false;
  link.rel = 'noopener noreferrer';
  status.innerHTML = '<span>พร้อมเข้าเว็บแอปหลัก</span> · ข้อมูลอยู่ใน Google Sheet เดิม (ตรวจสิทธิ์เมื่อเข้าระบบ)';
  if (config.autoOpen !== false) {
    status.innerHTML = '<span>กำลังพาเข้าสู่เว็บแอปที่เชื่อมฐานข้อมูล…</span> · หากไม่เปลี่ยนหน้า ให้กดปุ่มด้านล่าง';
    // No REST calls to a public API, no data fetched into public GitHub Pages.
    window.location.replace(url);
  }
})();

"use client";

export function useNewYearCountdown() {
  // ใช้ Date object โดยตรงแล้วแปลงเป็น date string ที่ moment.js เข้าใจ
  const newYearDate = new Date(2026, 0, 1, 0, 0, 0);
  
  // แปลงเป็นรูปแบบ ISO 8601 พร้อม timezone ไทย: "YYYY-MM-DDTHH:mm:ss+07:00"
  const year = newYearDate.getFullYear();
  const month = String(newYearDate.getMonth() + 1).padStart(2, '0');
  const day = String(newYearDate.getDate()).padStart(2, '0');
  const hours = String(newYearDate.getHours()).padStart(2, '0');
  const minutes = String(newYearDate.getMinutes()).padStart(2, '0');
  const seconds = String(newYearDate.getSeconds()).padStart(2, '0');
  
  const targetDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+07:00`;
  
  return {
    targetDate,
    year: 2026,
  };
}

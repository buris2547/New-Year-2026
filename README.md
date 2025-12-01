# 🎊 New Year Countdown 2026 - นับถอยหลังปีใหม่ 2026

เว็บแอปพลิเคชันนับถอยหลังสู่ปีใหม่ 2026 ที่สวยงามด้วย Next.js และ React

## ✨ Features (ฟีเจอร์)

- ⏰ **นาฬิกานับถอยหลังแบบ Flip** - แสดงวัน ชั่วโมง นาที วินาที
- 🌟 **เอฟเฟกต์พื้นหลังดาว** - ดาวเคลื่อนไหวและกระพริบสวยงาม
- 🎨 **การไล่สีแบบ Gradient** - พื้นหลังและข้อความที่สวยงาม
- 🎆 **ลูกบอลดอกไม้ไฟ** - เอฟเฟกต์ดอกไม้ไฟที่เคลื่อนไหว
- 💫 **แสงเรืองรอง (Blob)** - เอฟเฟกต์แสงที่เคลื่อนไหว
- 🎉 **ข้อความฉลอง** - เมื่อถึงปีใหม่จะแสดงข้อความแสดงความยินดี
- 🌐 **รองรับภาษาไทย** - ใช้ฟอนต์ Noto Sans Thai
- 📱 **Responsive Design** - ใช้งานได้ทั้งมือถือและคอมพิวเตอร์

## 🚀 การติดตั้ง

### ข้อกำหนด

- Node.js 18.x หรือสูงกว่า
- npm หรือ yarn

### ขั้นตอนการติดตั้ง

```bash
# เข้าไปในโฟลเดอร์โปรเจกต์
cd tes

# ติดตั้ง dependencies
npm install

# รันโปรเจกต์ในโหมด development
npm run dev
```

เปิดเบราว์เซอร์ที่ [http://localhost:3000](http://localhost:3000)

## 🛠️ เทคโนโลยีที่ใช้

- **[Next.js 16](https://nextjs.org/)** - React Framework
- **[React 19](https://react.dev/)** - UI Library
- **[TypeScript](https://www.typescriptlang.org/)** - Type Safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - CSS Framework
- **[@rumess/react-flip-countdown](https://www.npmjs.com/package/@rumess/react-flip-countdown)** - Flip Countdown Component
- **[Noto Sans Thai](https://fonts.google.com/noto/specimen/Noto+Sans+Thai)** - Thai Font

## 📁 โครงสร้างโปรเจกต์

```
tes/
├── app/
│   ├── components/
│   │   ├── CountdownTimer.tsx    # คอมโพเนนต์นาฬิกานับถอยหลัง
│   │   └── Confetti.tsx          # เอฟเฟกต์ confetti
│   ├── hooks/
│   │   └── useNewYearCountdown.ts # Hook สำหรับคำนวณวันปีใหม่
│   ├── styles/
│   │   └── stars.css             # CSS สำหรับดาวเคลื่อนไหว
│   ├── globals.css               # Global styles และ animations
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # หน้าหลัก
├── public/                       # Static files
├── package.json
└── README.md
```

## 🎨 การปรับแต่ง

### เปลี่ยนสีพื้นหลัง

แก้ไขใน `app/page.tsx`:
```tsx
<div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900">
```

### เปลี่ยนสีข้อความหัวเรื่อง

แก้ไขใน `app/page.tsx`:
```tsx
<h1 className="... bg-gradient-to-r from-yellow-200 via-pink-300 to-purple-300">
```

### เพิ่ม/ลดจำนวนดาว

แก้ไขใน `app/styles/stars.css` โดยการปรับค่า animation และ opacity

## 📝 Scripts

- `npm run dev` - รันโปรเจกต์ในโหมด development
- `npm run build` - Build โปรเจกต์สำหรับ production
- `npm run start` - รันโปรเจกต์ production build
- `npm run lint` - ตรวจสอบ code ด้วย ESLint

## 🎯 Features ที่เพิ่มเติม

- ✅ เอฟเฟกต์ดาวเคลื่อนไหวพร้อมการกระพริบ
- ✅ แสงเรืองรองแบบ blob animation
- ✅ ข้อความไล่สีแบบ gradient
- ✅ การ์ด countdown แบบ glass morphism
- ✅ อนิเมชั่น fade, scale, wiggle
- ✅ เอฟเฟกต์ดอกไม้ไฟ
- ✅ ข้อความฉลองเมื่อถึงปีใหม่
- ✅ รองรับฟอนต์ภาษาไทย

## 📄 License

MIT License

## 👨‍💻 Developer

สร้างด้วย ❤️ โดยใช้ Next.js และ React

---

**สวัสดีปีใหม่ 2026! 🎊**

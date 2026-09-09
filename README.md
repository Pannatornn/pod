# POD — เว็บไซต์ส่วนตัว

เว็บไซต์ Next.js / React สำหรับนำไปปรับเป็นเว็บรวบรวมโปรเจกต์ ประสบการณ์ และเกียรติบัตรด้านเทคโนโลยี คอมพิวเตอร์ วิศวกรรม และหุ่นยนต์

Repository: https://github.com/Pannatornn/pod

นำเข้าจาก [Figma-Portfolio ของ Ibrahim Memon](https://github.com/ibrahimmemonn/Figma-Portfolio) ที่ commit `aa87941e74224d4dda3e317a725c944e14ba52f2`

**สถานะ:** เวอร์ชันนี้เป็นโค้ดต้นแบบที่นำเข้ามาสำหรับปรับแต่ง เนื้อหา ชื่อบุคคล ประสบการณ์ รูปภาพ และลิงก์ติดต่อในหน้าเว็บยังเป็นของเจ้าของต้นฉบับ ไม่ใช่ประวัติหรือผลงานของเจ้าของ repo นี้

## เปิดใช้งานในเครื่อง

ต้องติดตั้ง Git และ Node.js ตั้งแต่ 20.9 ขึ้นไป แนะนำใช้ Node.js 24 ตามไฟล์ `.nvmrc` ที่เตรียมไว้

```bash
git clone https://github.com/Pannatornn/pod.git
cd pod
npm ci
npm run dev
```

เปิด http://localhost:3000 ในเบราว์เซอร์ของเครื่องที่รันคำสั่ง ปิดเซิร์ฟเวอร์ด้วย `Ctrl+C`

Repo นี้เป็น Private จึงต้องใช้บัญชี GitHub ที่เข้าถึง repo ได้ในการ clone หรือดาวน์โหลดผ่านหน้า GitHub ด้วย Code → Download ZIP แล้วแตกไฟล์และเปิด Terminal ในโฟลเดอร์นั้น จากนั้นรัน `npm ci` และ `npm run dev`

## รันเวอร์ชัน production ในเครื่องหรือเซิร์ฟเวอร์ Node.js

```bash
npm run build
npm start
```

เปิด http://localhost:3000 หลังเซิร์ฟเวอร์เริ่มทำงาน การเก็บโค้ดใน GitHub ยังไม่ได้ทำให้เว็บไซต์ออนไลน์ ต้องนำไปโฮสต์เพิ่มเติมเมื่อต้องการลิงก์สาธารณะ

## เผยแพร่ด้วย Render Static Site

โค้ดรองรับการสร้างไฟล์เว็บแบบ static โดยเปิด `POD_STATIC_EXPORT=1` ระหว่าง build ผลลัพธ์จะอยู่ในโฟลเดอร์ `out` และยังใช้ JavaScript กับแอนิเมชันในเบราว์เซอร์ได้

1. เปิด [Render Dashboard](https://dashboard.render.com/static/new) และเชื่อมต่อ GitHub ให้เข้าถึง repo `Pannatornn/pod` ได้
2. เลือก **Static Site** และตั้งค่าตามตารางด้านล่าง
3. กด **Create Static Site** แล้วรอให้สถานะเป็น **Live**
4. เปิดลิงก์ `onrender.com` ที่ Render แสดง แล้วส่งลิงก์นั้นให้ผู้อื่นเข้าชมได้

| ช่อง | ค่า |
| --- | --- |
| Name | `pod` หรือชื่อที่ยังว่าง |
| Branch | `main` |
| Root Directory | เว้นว่าง |
| Build Command | `npm ci && npm run build` |
| Publish Directory | `out` |
| Environment Variable | `POD_STATIC_EXPORT` = `1` |
| Environment Variable | `SKIP_INSTALL_DEPS` = `true` |
| Auto-Deploy | เปิด |

`SKIP_INSTALL_DEPS=true` ให้ Render ใช้การติดตั้งจาก `npm ci` ใน Build Command โดยไม่ติดตั้งซ้ำ ส่วน Node.js ใช้เวอร์ชันตาม `.nvmrc`

หลังเชื่อมต่อสำเร็จ การอัปเดตสาขา `main` จะให้ Render build และเผยแพร่เว็บใหม่อัตโนมัติ Repo ยังเป็น Private ได้ โดยอนุญาตให้ Render เข้าถึงผ่าน GitHub เท่านั้น

Static Site มีโควตาใช้งานฟรีตาม [เงื่อนไขของ Render](https://render.com/docs/static-sites) การตั้งค่าใน README นี้ยังไม่ถือว่าเว็บไซต์เผยแพร่แล้ว ต้องสร้างบริการและรอผล deploy บน Render ก่อน

การ build สำหรับเซิร์ฟเวอร์ Node.js ยังใช้ `npm run build` และ `npm start` ตามปกติ โดยไม่ตั้ง `POD_STATIC_EXPORT` ส่วนไฟล์ใน `out` ให้เปิดผ่าน static hosting

## จุดที่ใช้เปลี่ยนข้อมูล

| ไฟล์ | เนื้อหาที่แก้ไข |
| --- | --- |
| `app/components/Banner.tsx` | ชื่อ ข้อความแนะนำตัว และรูปหลัก |
| `app/components/About.tsx` | เกี่ยวกับตัวเองและความสนใจ |
| `app/components/Experience.tsx` | ประสบการณ์และกิจกรรม |
| `app/components/Projects.tsx` | โปรเจกต์และลิงก์ผลงาน |
| `app/components/Header.tsx` | โลโก้และเมนูนำทาง |
| `app/components/Footer.tsx` | อีเมลและช่องทางติดต่อ |
| `app/layout.tsx` | ชื่อหน้า คำอธิบายเว็บ ข้อมูลสำหรับแชร์ และ canonical URL |
| `app/page.tsx` | ลำดับส่วนต่าง ๆ ของหน้าเว็บ และ iframe จากต้นฉบับ |
| `app/globals.css` | สี ฟอนต์ และรูปแบบส่วนกลาง |
| `public/assets/` | รูปประจำตัวและภาพประกอบ |
| `public/projects/` | ภาพโปรเจกต์ |

ต้นฉบับยังไม่มีส่วนแสดงเกียรติบัตรโดยเฉพาะ สามารถเพิ่มเป็น component ใหม่และนำมาแสดงใน `app/page.tsx` หลังได้รับรูปและรายละเอียดจริง

## การเชื่อมต่อภายนอก

- การติดตั้ง dependencies ต้องใช้อินเทอร์เน็ต
- ต้นฉบับใช้ Poppins ผ่าน `next/font/google` ซึ่งดาวน์โหลดฟอนต์ระหว่างการ build
- ใน `app/page.tsx` มี iframe ของ Bookclipy จากต้นฉบับ และใน `app/layout.tsx` มี Vercel Analytics
- ไม่ต้องมี API key หรือฐานข้อมูลสำหรับเปิดหน้าเว็บพื้นฐาน

## เครดิตและเงื่อนไขต้นฉบับ

© Copyright 2025 Ibrahim Memon

โปรดอ่าน [README ต้นฉบับและเงื่อนไขการใช้งาน](README-UPSTREAM.md#-licenses) เจ้าของอนุญาตให้ fork และทดลองปรับแต่ง แต่ระบุให้ขออนุญาตเป็นลายลักษณ์อักษรก่อนเผยแพร่ทั้งชุด การนำเข้า repo นี้ไม่ได้เปลี่ยนเงื่อนไขดังกล่าว

ไฟล์ README-UPSTREAM.md เก็บข้อความต้นฉบับไว้เพื่อรักษาที่มาและเงื่อนไขการใช้งาน ส่วนคำสั่งสำหรับ repo นี้ให้ใช้ใน README นี้

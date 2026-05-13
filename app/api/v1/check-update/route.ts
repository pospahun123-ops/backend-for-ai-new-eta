import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // 🌟 ตรงนี้คือข้อมูลที่นายต้องมาแก้ทุกครั้งที่มี Version ใหม่
    const updateData = {
      latest_version: "1.0.5", // เลขเวอร์ชันล่าสุด (ต้องตรงกับใน pubspec.yaml ของ Flutter ตัวใหม่)
      download_url: "https://app.wallcraftthailand.com/base.apk", // ลิงก์ที่นายเอาไฟล์ APK ไปวางไว้
      release_date: "2026-05-12",
      change_log: "เพิ่มระบบตรวจสอบการอัปเดตอัตโนมัติ และปรับปรุงประสิทธิภาพ"
    };

    return NextResponse.json(updateData);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch update data" }, 
      { status: 500 }
    );
  }
}
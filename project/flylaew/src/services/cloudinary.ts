

export async function uploadImageToCloudinary(file: File): Promise<string | null> {
  const CLOUD_NAME = "de1g7yto1"; // 🔸 เปลี่ยนเป็น Cloud Name ของคุณ
  const UPLOAD_PRESET = "hotel_uploads"; // 🔸 ตั้งค่าใน Cloudinary

  const url = `https://api.cloudinary.com/v1_1/de1g7yto1/image/upload`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (response.ok && data.secure_url) {
      return data.secure_url; // ✅ คืน URL ของรูปที่อัปโหลดสำเร็จ
    } else {
      console.error("Upload failed:", data);
      return null;
    }
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
}

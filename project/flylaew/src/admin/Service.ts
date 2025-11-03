// import FlightData from './FlightData.json' 


// export interface Flight {
//   id: number;
//   flightimgeurl: string;
//   flightname: string;
//   flightid: string;
//   flightprice: number;
//   flightduration: string;
//   flightfrom: string;
//   flightto: string;
//   departuretime: string;
//   landingtime: string;
// }

// const STORAGE_KEY = 'flights_data';

// const loadProducts = (): Flight[] => {
//     const savedData = localStorage.getItem(STORAGE_KEY);
//     if (savedData) {
//         return JSON.parse(savedData);
//     }
//     return [...FlightData];
// };

// const saveProducts = (Flights: Flight[]): void => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(Flights));
// };

// export const getAllProducts = (): Flight[] => {
//     return loadProducts();
// };

// export const getProductById = (id: number): Flight | undefined => {
//     const Flights = loadProducts();
//     return Flights.find(Flights => Flights.id === id);
// };

// export const createProduct = (productData: Omit<Flight, 'id'>): Flight => {
//     // โหลดข้อมูลผลิตภัณฑ์ทั้งหมดที่มีอยู่
//     const products = loadProducts();
//     const newId = Math.max(...products.map(p => p.id), 0) + 1;

//     const newProduct: Flight = {
//         id: newId,
//         ...productData // ใช้ spread operator เพื่อคัดลอกคุณสมบัติทั้งหมด
//     };
//     products.push(newProduct);
//     saveProducts(products);
//     return newProduct;
// };

// export const updateProduct = (id: number, productData: Partial<Omit<Flight, 'id'>>): Flight | null => {
//     // โหลดข้อมูลผลิตภัณฑ์ทั้งหมด
//     const products = loadProducts();
    
//     // ค้นหา index ของผลิตภัณฑ์ที่ต้องการแก้ไข
//     const index = products.findIndex(product => product.id === id);
    
//     // หากไม่พบผลิตภัณฑ์ที่ต้องการ (index = -1) ให้คืนค่า null
//     if (index === -1) return null;
    
//     // อัปเดตข้อมูลผลิตภัณฑ์โดยรวมข้อมูลเก่ากับข้อมูลใหม่
//     // ใช้ spread operator เพื่อคงข้อมูลเก่าไว้และเขียนทับด้วยข้อมูลใหม่
//     products[index] = { ...products[index], ...productData };
    
//     // บันทึกข้อมูลที่อัปเดตแล้วลง localStorage
//     saveProducts(products);
    
//     // คืนค่าผลิตภัณฑ์ที่อัปเดตแล้ว
//     return products[index];
// };

// /**
//  * ลบผลิตภัณฑ์จากระบบ
//  * 
//  * ฟังก์ชันนี้จะค้นหาและลบผลิตภัณฑ์ที่ตรงกับ ID ที่ระบุ
//  * ใช้สำหรับการลบสินค้า เช่น ในหน้าจัดการสินค้าหรือการยืนยันการลบ
//  * 
//  * @param {number} id - รหัสเฉพาะของผลิตภัณฑ์ที่ต้องการลบ
//  * @returns {boolean} true หากลบสำเร็จ, false หากไม่พบผลิตภัณฑ์
//  */
// export const deleteProduct = (id: number): boolean => {
//     // โหลดข้อมูลผลิตภัณฑ์ทั้งหมด
//     const products = loadProducts();
    
//     // ค้นหา index ของผลิตภัณฑ์ที่ต้องการลบ
//     const index = products.findIndex(product => product.id === id);
    
//     // หากไม่พบผลิตภัณฑ์ที่ต้องการ (index = -1) ให้คืนค่า false
//     if (index === -1) return false;
    
//     // ลบผลิตภัณฑ์ออกจากอาร์เรย์โดยใช้ splice()
//     // splice(index, 1) หมายถึงลบ 1 รายการเริ่มจาก index ที่ระบุ
//     products.splice(index, 1);
    
//     // บันทึกข้อมูลที่อัปเดตแล้วลง localStorage
//     saveProducts(products);
    
//     // คืนค่า true เพื่อแสดงว่าลบสำเร็จ
//     return true;
// };




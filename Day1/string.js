let str = 'Java Script Language'; //ประกาศค่าตัวแปรข้อความ
console.log(str); //แสดงผล str
console.log(str.length); //ดูว่ามีกี่ตัวอักษร

str = str.replace('Java', 'PHP'); //แทนค่า
console.log(str);

str = str.concat(' 2024 '); //ต่อข้อความ
console.log(str);
console.log(str.indexOf('Script')); //หาตำแหน่งจากหน้าไปหลัง
console.log(str.lastIndexOf('2024')); //หาตำแหน่งจากหลังมาหน้า

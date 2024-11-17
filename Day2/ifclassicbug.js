let a = 8;

if (a = 10) { //ใส่ = อันเดียวจะเปลี่ยนค่า a เพราะ let เปลี่ยนค่าได้ จะทำให้เกิดบัค
    console.log('if');
} else {
    console.log('else');
}

if (a == 10) console.log('if');
else console.log('else')  
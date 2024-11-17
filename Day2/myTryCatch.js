try {
    let i = 10;
    console.log(i / 0);
} catch (e) {
    console.log(e);
}
// ดักError

const a = "Heool";
try {
    console.log(int(a));
} catch (e) {
    console.log('not convert text to number');
}
class Car {
    color;

    run() {
        console.log('run');
    }
    info() {
        console.log('color is ' + this.color);
    }
}

const c = new Car(); //newเพื่อให้carกลายเป็นออฟเจค
c.run(); //เรียนrunจากข้างบน
c.color = 'red';
c.info(); //เรียกinfo

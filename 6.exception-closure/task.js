//задача №1

function parseCount (count) {
    const res = Number.parseInt(count, 10);
    if (Number.isNaN(res)){
      throw new Error("Невалидное значение");
    }

    return res;
  }

  const validateCount = (count) => {
    try {
      return parseCount(count);
    } catch (error) {
      return error;
    }
  }

//задача №2

class Triangle {
  constructor(a, b, c){
    this.a = a;
    this.b = b;
    this.c = c;
  
    if(((a + b) < c) || ((b + c) < a) || ((a + c) < b)){
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
    getPerimeter() {
      return this.a + this.b + this.c;
    }
  
    getArea() {
    let halfPer = (this.a + this.b + this.c) * 0.5;
    return +Number(Math.sqrt(halfPer * (halfPer - this.a) * (halfPer - this.b) * (halfPer - this.c))).toFixed(3);
    }
  }
  function getTriangle(a, b ,c) {
    let triangle;
    
    try {
      triangle = new Triangle(a, b, c);
    } catch {
      const err = "Ошибка! Треугольник не существует";
      return {
        getArea: () => err,
        getPerimeter: () => err
      }
    }
  
    return triangle;
  }
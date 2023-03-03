function parseCount(value) {
    const result = parseFloat(value);
    if (isNaN(result)) {
        throw new Error ('Невалидное значение');
    }
    return result;
}

function validateCount(value) {
    try {
        const result = parseCount(value);
        return result;
    } catch(error) {
        return error;
    }
}




class Triangle {
    constructor(a, b, c) {
        if((a > b + c) || (b > a + c) || (c > a + b)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    
    get perimeter() {
        const p = this.a + this.b + this.c;
        return p;
    }

    get area() {
        const p = this.a + this.b + this.c;
        const area = Math.sqrt(0.5 * p * (0.5 * p - this.a) * (0.5 * p - this.b) * (0.5 * p - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            },
        
            get area() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}
// Your code here

class Polygon {
   constructor(array) {
    this.array = array 
   }
    get countSides() {
        return this.array.length
    }
    get perimeter() {
     return this.array.length * this.array[0]
    }
}

class Triangle extends Polygon {
    constructor(array) {
       super(array)     
    }

    get isValid() {
        for (let i = 1; i < this.array.length; i++) {
            if (this.array[i] !== this.array[0]) {
              return false;
            }
          }
          return true;
        }

    get perimeter() {
        return this.array.length * this.array[0]
    }

}


class Square extends Polygon {
    constructor(array){
    super()
    }
}

// class Triangle extends Polygon {
//     constructor(array) {
//        super(array)     
//     }
// 
//     get isValid() {
//       if (this.array.length === 3){
//           return true 
//       } 
//     }
// }
class User {
    _arms = 2
    static planet = 'Earth'
    #legs = 2
    fingers = 10

    constructor(name, legs, arms, fingers) {
        this.name = name
        this.#legs = legs
        this._arms = arms
        this.fingers = fingers
    }

    static sayHello() {
        console.log('Hello')
    }

    getName() {
        return this.name
    }
    setName(val) {
        if (val.length < 5 || typeof(val) == "string") {
            throw new Error('Please fill only letters')
        }
        this._name = val
    }
}

class Student extends User {
    mark = 5

    speak() {
        console.log('Yes, I know answer')
    }
}

class SchoolStudent extends Student {
    speak() {
    super.speak()
    console.log('My answer very short and correct')
    }
}

let student1 = new Student("jenkins", 2, 2)
student1.speak()
console.log(student1.getName())
console.log('student1 ^^^')
let student2 = new SchoolStudent("travis", 2, 2)
student2.speak()

let student3 = new SchoolStudent("mimimi", 2, 2, 9)
console.log(student3.fingers)
student3.fingers = 4
console.log(student3.fingers)





// let userD = new User('Birdss', 22, 2)
// let nnn = userD.getName
// console.log(nnn)
// console.log(User.planet)
// //userD.legs = 3
// console.log(userD.legs)

// let userD2 = new User(2)
// let nnn2 = userD2.getName
// console.log(nnn2)



// let userN = new User()
// console.log(userN.arms)

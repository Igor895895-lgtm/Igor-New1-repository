// є абстрактний клас
class Human {
    constructor() {
        if (this.constructor == Human) {
            throw new Error('it is abstract class')
        } 
    }
    eat(){console.log('eating')}
    listen() { console.log('listening') }
}

// створити клас нащадок Worker - у якого має бути свій конструктор з оголошенням двох полів salary, work time. 
// Також має бути два метода який виводить привітання, і каже що робота завершена.
// створити метод який буде виводити в консоль повідомлення чи працює зараз працівник чи ні
// і в залежності від години виклику методу відображати текст робочі години чи ні
// робочий день з 09:00 до 18:00

class Worker extends Human {
    constructor(salary, workTime) {
        super()
        this.salary = salary
        this.workTime = workTime
    }
    greeting() {
        console.log('Hi, I am a worker.')
    }
    workComplete() {
        console.log('Work is finished.')
    }
    isWorkingNow() {
        const now = new Date()
        const currentHour = now.getHours()

        if (currentHour >= 9 && currentHour < 18) {
            console.log('Worker is currently working.')
        } else {
            console.log('Worker is not working right now.')
        }
    }
}
const worker = new Worker(1000, 'from 09:00 to 18:00')
console.log('Salary:', worker.salary)
console.log('Work Time:', worker.workTime)
worker.greeting()
worker.workComplete()
worker.isWorkingNow()
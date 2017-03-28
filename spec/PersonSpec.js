describe(' test persion' ,() => {

    const Person = require('../src/Person.js')
    const Worker = require('../src/Worker.js')
    it('should return my introduce when call introduce method' , () => {

        let tigar = new Person('tianguang', 26)
        expect(tigar.introduce()).toEqual('My name is tianguangam 26 years old')
    })

    it('should return my student introduce when call introduce method' , () => {
        function Student(name,age,className) {
            Student.prototype = new Person(name,age)
            this.className = className
        }
        Student.prototype.introduce = function() {
            return ( 'I am a Student. I am at Class '+this.className+'.')
        }
        let tigar = new Student('tianguang', 26, 2)
        expect(tigar.introduce()).toEqual('I am a Student. I am at Class 2.')
    })

    it('should return my Worker introduce when call introduce method' , () => {
        let tigar = new Worker('tianguang', 26)
        expect(tigar.introduce()).toEqual('I am a Worker. I have a job.')
    })


    it('should return My name is Tom. I am 21 years old.',() => {
        let tigar = new Person('Tom',21)

        expect(tigar.basic_introduce()).toEqual('My name is Tom. I am 21 years old.')
    })

    it('should return My name is Tom. I am 21 years old. I am a Student. I am at Class 2.',() => {
        function Student(name,age,className) {
            Person.call(this,name,age)
            this.className = className
        }
        Student.prototype = new Person();
        Student.prototype.introduce1 = function() {
            return (this.basic_introduce()+' I am a Student. I am at Class '+this.className+'.')
        }
        let tigar = new Student('Tom', 21, 2)
        expect(tigar.introduce1()).toEqual('My name is Tom. I am 21 years old. I am a Student. I am at Class 2.')
    })

    it('should return teacher  is Tom. I am 21 years old. I am a Teacher. I am at Class 2.',() => {
        function Teacher(name,age,className) {
            Person.call(this,name,age)
            this.className = className
        }
        Teacher.prototype = new Person();
        Teacher.prototype.introduce1 = function() {
            if(this.className === undefined){
                return this.basic_introduce()+' I am a Teacher. I teach No Class.'
            }
            return (this.basic_introduce()+' I am a Teacher. I am at Class '+this.className+'.')
        }
        let tigar = new Teacher('Tom', 21)
        expect(tigar.introduce1()).toEqual('My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.')

        let tigar1 = new Teacher('Tom', 21,2)
        expect(tigar1.introduce1()).toEqual('My name is Tom. I am 21 years old. I am a Teacher. I am at Class 2.')
    })
})
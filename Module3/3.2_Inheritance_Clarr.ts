{

    // Inheritance


    class Parent {
           name: string;
        age: number;
        email: string;

        constructor(name:string, age:number, email:string) {
            this.name = name;
            this.age = age;
            this.email = email;
        }

        designation(value:string) {
            console.log(`My Name is ${this.name} and My Designation ${value}`);
        }
    }
    

    class Student extends Parent {
        constructor(name:string, age:number, email:string) {
           super(name,age,email)
        }

        designation(value:string) {
            console.log(`My Name is ${this.name} and My Designation ${value}`);
        }
    }


    class Techer extends Parent {
        contactNumber: string;
        constructor(name: string, age: number, email: string, contactNumber: string) {
           super(name,age,email)
            this.contactNumber = contactNumber;
        }
        address(value: string) {
            console.log(`My Name is ${this.name} and My Home Address ${value}`);
            
        }
    }



    const student = new Student("Sadiq", 23, "sadi@gmail.com");
    const student1 = new Student("Noman", 27, "noman@gmail.com");
    // console.log(student1);

    const teacher = new Techer("Najmul", 34, "najmul@gamil.com", "234234823489");
        console.log(teacher.designation("Teacher"));


    









   //

}
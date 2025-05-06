{


    // Polymorphisom

    class Person {
        getSleep() {
            console.log(`I am Bekar so i am Sleeping 8 Hours per day`);
        }
    }


    class Student extends Person {
         getSleep() {
            console.log(`I am Student so i am Sleeping 5 Hours per day`);
        }
    }

    class Developer extends Person {
         getSleep() {
            console.log(`I am Developer so i am Sleeping 3 Hours per day`);
        }
    }


    const getSleeping = (sleep: Person) => {
        return sleep.getSleep()
    }

    const person = new Person();
    const student = new Student();
    const developer = new Developer();

    // getSleeping(person)
    // getSleeping(student)
    // getSleeping(developer)


    class Shap {
        getArea(): number {
            return 0;
        }
    }

    class Circal {
        radius: number;

        constructor(radiua: number) {
            this.radius = radiua;
        }

        getArea(): number {
            return Math.PI * this.radius *this.radius;
        }
    }

    const getShapArea = (params: Shap)=>{
        console.log(params.getArea());
        
    }

    const newShap = new Shap();
    const newShap1 = new Circal(10);

    getShapArea(newShap1)


    









    //
}
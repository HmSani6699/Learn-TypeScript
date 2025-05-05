{

    // Class

    class Person {
        name: string;
        age: number;
        email: string;

        constructor(name: string, age: number, email: string) {
            this.name = name;
            this.age = age;
            this.email = email;
        }

    }

    class PersonPublic {
    //   public  name: string;
    //   public  age: number;
    //  public   email: string;

        constructor(public name: string,public age: number,public email: string) {
            // this.name = name;
            // this.age = age;
            // this.email = email;
        }

    }


    class PersonPublic1 {
        constructor(public name: string,public age: number,public email: string) { }
    }

    const user = new Person("Sadiq", 23, "sadiq@gmail.com");

    // console.log(user);
    
    




    //
    
}
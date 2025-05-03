{
    
    // 2.1  Tyepe in Assertion
    
    const user = "This is Frist User";
    (user as string)




    // 2.2 Type in InterFace and Extends

    interface User1 {
        name: string;
        age: number;
    }
    
    const user1: User1 = {
        name: "Sadiq",
        age:23,
    }

    interface User2 {
        [index:number] : number
    }
    const user2: User2 = [1,2,3,4]


    interface User3 {
        (a: number): number;
    }

    const add: User3 = (a) => { return a + 5 };

    // Extends

    type Student1 = {
        name: string;
        age: number;
    };

    type StudentExtendsVlaue = Student1 & {
        roll: number;
    };

    const student1: StudentExtendsVlaue = {
        name: "Sadiq",
        age: 23,
        roll: 34
    };


    interface Student2 {
           name: string;
        age: number;
    }

    interface StudentInterfaceExtends extends Student2 {
        roll: number;
    }

    const student3: StudentInterfaceExtends = {
        name: "Sadiq",
        age: 34,
        roll: 456,
    };






}


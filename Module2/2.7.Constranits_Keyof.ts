{


    // Constraint keyof
    
   interface Student {
        name: string;
        age: number;
       email: string;
       address:string
    }

    const constraintFunction = <O, K extends keyof O>(obj: O, key: K) => { return obj[key]; };

    const newStudent: Student = { name: "Sadiq", age: 23, email: "sadi@gmail.com", address: "Dhaka" };

    const result = constraintFunction(newStudent, "address");


//
        
    }

 









}
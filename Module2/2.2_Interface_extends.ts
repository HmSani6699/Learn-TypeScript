{
    //
    

    // Type Interface in TypeScript
    // Type Extends in TypeScript


    type User ={
        name: string;
        age: number;
    }

    interface user1 {
        name: string;
        age: number;
    }


    // Type Extends

    type User2 = {
        nam: string;
        age: number
    };

    type NewUserRolle = User2 & { role: string };

    
    const user3: NewUserRolle = {
        nam: "This is User",
        age: 23,
        role: "Admin"
    }
    

    interface User3 {
       nam: string;
        age: number;
    }

    interface NewUserRolle1 extends User3 {
        role: string
    }

    const user4: NewUserRolle1 = {
        nam: "This ie Fourth User",
        age: 23,
        role:"admin"
    }


    // Use Type Interface in Array

    type Manager1 = number[];
    const manager1: Manager1 = [1, 2, 3, 4, 5];   // Use Type Alias

    interface Manager2 {
        [index: number]: number;
    }
    const manager2: Manager2 = [1, 2, 3, 4, 5];  // Use Type Interface


    // Use Type Interface in Function
    
    type Add1 = (a: number, b: number) => number;

    interface Add2 {
        (a:number,b:number) :number
    }

    const add1: Add1 = (a, b) => {
        return  a+b
    }









    //
}
{

    // TypeScript Besic Data Types

    // Object Type
    const user: {
        name: 'Sadiq';       // String Literal Type
        age: number;
        email?: string;      //Optional Property
        contact: string;
        address: string
    } = {
        name: "Sadiq",
        age: 23,
        email: "sadi@gmail.com",
        contact: "3454353",
        address:"Dhaka"
    }



    // RestOperator
    const add = (...friends : string[] )  => {
        return friends.forEach((frind) => frind);
        
    }

    add("Sadiq", "Noman");


    // Speed Operator
    const user1 = [1, 2, 3, 4, 5];
    const user2 = [6, 7, 8, 9, 10];

    const newUser = [...user1, ...user2]; // Speed Operotor





}
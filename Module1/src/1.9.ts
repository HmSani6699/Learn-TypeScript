{//


    // Type aliases



    type User =  {
        name: string;
        age: number;
        isAdmin: boolean;
        contactNo? :string
    }

    const user1 : User = {
        name: "Sadiq",
        age: 23,
        isAdmin: true
    }
    const user2 : User = {
        name: "Sadiq",
        age: 23,
        isAdmin: true
    }



    type Add =(a:number,b:number)=> number

    const add: Add = (a, b) =>{ return a + b};



type IsAdmin = boolean | string | number

    const admin : IsAdmin = 'd'

 //
}
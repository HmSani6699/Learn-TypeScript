{
    //Utillity Type in Typescript

    // Pick Type
    type User = {
        name: string;
        age: number;
        email:string
    }


    type NewUser = Pick<User, "name">;


    // Omit Type
    type newUser2 = Omit<User, "age">;


    // Partial Type 
    type newUser3 = Partial<User>;


    // Required Type
    type newUser4 = Required<User>;


    // ReavOnly Type
    type newUser5 = Readonly<User>;


    // Record Type
    type newUser6 = Record<string, unknown>;

    const numList: newUser6 =  {
        name: 1,
        age: 23,
        email:"sadiq@gmail.com"
    }




















    //
}
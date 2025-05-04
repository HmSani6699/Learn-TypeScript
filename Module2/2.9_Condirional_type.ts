{
    // Conditional type in TypeScript

    type isUser = true;


    type newUser = isUser extends true ? "Yes This is Correct " : "Not Correct";


    interface User {
        name: string;
        email: string;
        address: string;
    }


    type newUser2<T> = T extends "name" | "email" ? true : false;
    
  type result = newUser2<"">

    
    



















    //
}
{
//
    
    // Type Assertion
    
    let user: any;

    user = "This is first User";

    const user1 = (user as string);
    user = 123;


    const user2 = (user as number);

    // console.log(user1,user2);
    


    // const add = (a: number | string) : number | string | undefined => {
    //     if (typeof a === "number") {
    //         console.log(a + 10);
    //         return a + 10;
    //     } else if (typeof a === "string") {
    //         console.log(a);
    //         return a;
    //     }
    //     return undefined;
    // }


    const add = (a: number | string) : number | string | undefined => {
        if (typeof a === "number") {
           
            return 'This is Numeber';
        }
        else if (typeof a === "string") {
           return "This is String"
            
        }else return "This is Undefined"
    }


    const log = add(23) as number;
    console.log(log);
    

//
}
{

    // Interface and Generic type in TypeScript
    
    interface Man < T ,S = null>{
        name: string;
        age: number;
        address: {
            city: string;
            country: string;
        };
        contact: T;
        status?: S
        
    } 

    const user: Man < {number1:number,number2:string}> = {
        name: "Sadiq",
        age: 23,
        address: {
            city: "Dhaka",
            country:"Bangladesh"
        },
        contact:{number1: 1996359111 , number2:"230932840230"}
    }


    const user2: Man<{ father: number, mother: number, gerden: number } , string > = {
        name: "Sadiq",
        age: 23,
        address: {
            city: "Dhaka",
            country:"Bangladesh"
        },
        contact: { father: 1996359111, mother: 45646, gerden: 5645 },
        status : "no active"
    }


    // console.log();



    interface ManInformation <A,C> {
        name: string;
        age: number;
        ocupation: string;
        address: A
        contact:C
    }


    type Address = { presentAddress: string, permenentAddress: string };

    interface Contact {father:number, mother:number}

    const newMan1: ManInformation < Address ,Contact> = {
        name: "Sadiq",
        age: 23,
        ocupation:"Student",
        address: {
            presentAddress: "Dhaka",
            permenentAddress:"Bangladesh"
        },
        contact: { father: 1996359111, mother: 45646 },
    }
    



}
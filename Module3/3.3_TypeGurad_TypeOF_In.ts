{


    // Type Gurad   ===> Typeof  ===> In



    // typeof
    type Condition = number | string
    
    const sum = (value1: Condition, value2: Condition) => {
        if (typeof value1 === "number" && typeof value2 === "number") {
            return value1 + value2;
        } else {
            return value1.toString() + value2.toString()
        }
    }

    const result = sum("1","4" );
    // console.log(result);
    

    // in Type

    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role:string
    }

    const getUser = (user: NormalUser | AdminUser) => {

        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        } else {
            console.log(`My name is ${user.name}`);
            
        }
        
    }


    const normalUser: NormalUser = {
        name:"Sadiq"
    } 


    const adminUser: AdminUser = {
        name: "Admin",
        role:"admin"
    }

    getUser(adminUser)





    //
}
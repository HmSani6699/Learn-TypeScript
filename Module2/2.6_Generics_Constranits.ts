{

    // Generics Constranits in TypeScript
    

    const devStudent = <T extends {id:number,name:string,email:string}>(student: T) => {
        const defualValue = "Good Student"
        return {
            ...student,
            defualValue
        }
    }

    const student1 = devStudent<{ id: number, name: string, email: string }>({ id: 1, name: "Sadiq", email: "sadiq@gmail.com" });
    
    const student2 = devStudent<{ id: number, name: string, email: string }>({ id: 1, name: "Sadiq", email: "sadiq@gmail.com" });








}
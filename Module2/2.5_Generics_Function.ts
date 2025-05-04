{

    // Generics use in Function
    
    const add = (perams  : number) : number[] => {
        return [perams + 20]
    }

    // const result = add(2);
    
    const add1 = <T>(perams: T): T[] => {
        return [perams];
    };


    const result = add1<string>('sadiq');

    const resultNum = add1<number>(45);



    // Generics use in Function

    const admissionStudent = <T>(student: T) => {
        const defultValue= "Tomi valo na"
        return {
            ...student,
         defultValue
        }
    }

    const student1 = admissionStudent<{ name: string, age: number }>({ name: "Sadiq", age: 23 })
    





    const sum = <Num1,Num2> (num1: Num1, num2: Num2) => { return [num1, num2] };

    const result1  = sum <number,number >(1,2)









//
}
{

    // Generics Type in TypeScript
    
    type NewArray <T> = Array<T>;

    // const number: number[] = [1, 2, 3, 4, 5, 6,];
    // const number: Array<number> = [1, 2, 3, 4, 5, 6,];
    const number: NewArray<number> = [1, 2, 3, 4, 5, 6,];
    
    // const string: string[] = ["Sadiq", "Noman"];
    // const string: Array<string> = ["Sadiq", "Noman"];
    const string: NewArray<string> = ["Sadiq", "Noman"];

    // const boollean: boolean[] = [true,false];
    // const boollean: Array<boolean> = [true,false];
    const boollean: NewArray<boolean> = [true, false];
    

    //  Use Generics type in array like object

    const users: NewArray <{name:string,age:number}>  = [
        {name:"Sadiq" ,age:23},
        {name:"Sadiq" ,age:23},
        {name:"Sadiq" ,age:23},
    ]



    // use Generics type in Topule

    type GenericsTuple <N,S> =[N,S]

    const user: GenericsTuple<string, number> = ["Sadiq", 23];


     type GenericsTuple1 <S,N,T,O> =[S,N,T,O]

    const user1: GenericsTuple1<string, number, boolean, { name: string, age: number }> = ["Sadiq", 23, true, { name: "Sadiq", age: 23 }]
    





    type GenericsUser<A> = {
        name: string;
        age: number;
        address:A
    }

    const user3: GenericsUser<{city:string,country:string}> = {
        name: "Sadiq",
        age: 23,
        address: {
            city: "Dhaka",
            country:"BAngladesh"
        }
    }


    type GenericsCountArray <T> = T[]

    const countArray: number[] = [1, 2, 3, 4];
    const countArray1: Array<number> = [1, 2, 3, 4];
    const countArray2: GenericsCountArray<number> = [1, 1, 2, 3, 4, 54]; 
    const stringArray2: GenericsCountArray<string> = ["Sadiq", "Noman"]; 




    type GenericsRecapTuple<N, A> = [N, A];

    const student1: GenericsRecapTuple <string,{city:string,country:string,contact:number} > =["sadiw",{city:"Dhaka",country:"Bangladesh",contact:1243253456}]


    // 

}
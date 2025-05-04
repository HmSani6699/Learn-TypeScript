{

    //

    type MappedType = {
        name: string;
        number: number;
        email: string;
    }


    type NewMapedType = {
        [key in keyof MappedType] : number
    }


    type NewStudent<T> = {
        [key in keyof T]: T[key];
    }
 
    const user: NewStudent<{ name: string, number: number }> = {
        name: "sadiw",
        number:34
    }













    //
}
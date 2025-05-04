{
//

    // Asynchronous Typescript Example

    const createPromise = (): Promise<boolean> => {
        return  new Promise<boolean>((resolve, reject) => {
            const data: boolean = true;

            if (data) {
                resolve(data);
            } else {
                reject('No data Found  !')
            }

        })
    }

    const result =async ():Promise<boolean> => {
        const data:boolean = await createPromise();
        console.log(data);
        return data
    }

    result()




    //
}
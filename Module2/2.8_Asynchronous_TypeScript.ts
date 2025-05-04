{
//

    // Asynchronous Typescript Example

    const createPromise = () => {
        return  new Promise((resolve, reject) => {
            const data: string = "Hallo";

            if (data) {
                resolve(data);
            } else {
                reject('No data Found  !')
            }

        })
    }

    const result =async () => {
        const data = await createPromise();
        console.log(data);
        
    }




    //
}
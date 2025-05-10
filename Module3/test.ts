 interface Product {
name: string;
price: number;
}

function getMostExpensiveProduct (products: Product[]): Product | null {

   

    let max = products[0].price;
    let higestPrice = products[0]

    for (let i=1; i < products.length; i++) {

    if (products[i].price > max) {

    max = products[i].price;

    higestPrice = products[i];

}

}

return higestPrice || []

}

const products = [
    {name:"Sadiq",price:10}
];

 console.log(getMostExpensiveProduct ([]));
// Object

const user: {
    name: string;
    age: number;
    isAdmin: boolean;

} = {
    name: "Sadiq",
    age: 35,
    isAdmin: true
}




const user2: {
    name: string;
    age: number;
    address: string;
} = {
    name: "Sadiqur Rahman",
    age: 23,
    address: "Dhaka, Bangladesh"
}



const user3: {
    name: 'Sadiq';   // String literal type in TypeScript
    age: number;
    isAdmin: boolean
} = {
    name: "Sadiq",
    age: 23,
    isAdmin: false  
}



const user4: {
  readonly  name: string;
    age: number;
    isAdmin: boolean
} = {
    name: "Sadiq",
    age: 23,
    isAdmin: true
}

// user4.name = "Sadiqur Rahman" // Error: Cannot assign to "name" becouse it is a read-only property
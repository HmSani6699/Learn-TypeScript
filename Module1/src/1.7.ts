{//
    
 // Speed Operator
// Rest Operator
// Destructuring

const arr1 = ["Sadiq", "Noman", "Kalib"];
const arr2 = ["Korim", "Babul", "Habul"];

    
    const allArr = [...arr1, ...arr2]; //Speed Operator




    // Rest Operator
    const allFriends = (...friends: string[]) => {
        return friends?.forEach((friend: string):string => friend)
        
    }

    allFriends("Sadiq" ,"Lemon" , "Rabbil")





//
}
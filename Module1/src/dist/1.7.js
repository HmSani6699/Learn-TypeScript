"use strict";
{ //
    // Speed Operator
    // Rest Operator
    // Destructuring
    const arr1 = ["Sadiq", "Noman", "Kalib"];
    const arr2 = ["Korim", "Babul", "Habul"];
    const allArr = [...arr1, ...arr2]; //Speed Operator
    // Rest Operator
    const allFriends = (...friends) => {
        return friends === null || friends === void 0 ? void 0 : friends.forEach((friend) => friend);
    };
    allFriends("Sadiq", "Lemon", "Rabbil");
    //
}

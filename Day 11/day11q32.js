"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_user = ['user1', 'admin', 'user3', 'user5'];
let new_user = ['User1', 'User6', 'User7', 'admin', 'User9'];
new_user.forEach(newUser => {
    if (current_user.some(currentUser => currentUser.toLocaleLowerCase() === newUser.toLocaleLowerCase())) {
        console.log(newUser, ', will need to enter a new username');
    }
    else {
        console.log(newUser, 'is available.');
    }
});

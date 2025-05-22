// Task 1

// const calculateTotalBalance = users => {
//   return users.reduce((acc, balance) => acc + balance.balance, 0);
// };

// console.log(calculateTotalBalance(users)); // 20916

// Task 2

// const users = [
//   {name: "Sharlene Bush",friends: ["Briana Decker", "Goldie Gentry"],},
//   {name: "Elma Head",friends: ["Goldie Gentry"],},
//   {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry"],},
//   {name: "Ross Vazquez",friends: ["Marilyn Mcintosh"],},
// ];

// const getUsersWithFriend = (users, friendName) => users.filter((user) => 
//   user.friends.includes(friendName)).map((user) => user.name)


// // const getUsersWithFriend = (users, friendName) => {
// //   const filtered = users.filter((user) => {
// //     // console.log(user);
// //     // console.log(friendName);
// //         const findHasFriend = user.friends.includes(friendName)
// //         return findHasFriend
// //   })
// //   const userNames = filtered.map((user) => user.name)
// //         return userNames
// // }

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// Task 3

// const users = [
//   { name: "Sharlene Bush", friends: ["Briana Decker", "Goldie Gentry"] },
//   { name: "Elma Head", friends: ["Goldie Gentry"] },
//   {name: "Sheree Anthony",friends: ["Briana Decker", "Goldie Gentry", "Ross Vazquez"] },
//   {name: "Ross Vazquez",friends: ["Marilyn Mcintosh","Elma Head","Carey Barr","Blackburn Dotson",]},
//   { name: "Moore Hensley", friends: [] },
//   { name: "Carey Barr", friends: ["Sharlene Bush"] },
//   { name: "Blackburn Dotson", friends: ["Elma Head", "Ross Vazquez"] },
// ];

// const getNamesSortedByFriendsCount = users => {
//   const userCopy = [...users];
//   const sortedUser = userCopy.sort((a, b) => {
//     const SorteredA = a.friends.length;
//     console.log(SorteredA);
    
//     const SorteredB = b.friends.length;
//     return SorteredA - SorteredB;
//   })
//   const sorteredNames = sortedUser.map((user) => user.name);
//   return sorteredNames
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// Завдання 4

// Отримати масив всіх умінь всіх користувачів (поле skills), при цьому не має бути повторюваних умінь і вони повинні бути відсортовані в алфавітному порядку.

const users = [
  { name: "Alice", skills: ["html", "css", "js"] },
  { name: "Bob", skills: ["css", "react", "nodejs"] },
  { name: "Charlie", skills: ["nodejs", "express", "mongo"] },
];

const getSortedUniqueSkills = users => {
  const allSkills = users.flatMap(user => user.skills);
  const uniqueSkills = allSkills.reduce((acc, skill) => {
    if (!acc.includes(skill)) {
      acc.push(skill);
    }
    return acc;
  }, []);
  return uniqueSkills.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'css', 'express', 'html', 'js', 'mongo', 'nodejs', 'react' ]
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
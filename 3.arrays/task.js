function compareArrays(arr1, arr2) {
    let result = true;
    if(arr1.length !== arr2.length) {
        result = false;
    } else {
        result = arr1.every((item, index) => item === arr2[index]);
    }
//     if(arr1.length !== arr2.length) {
//         result = false;
//     } else {
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             result = false;
//             break;
//         }
//     }
// }
    return result;
}

function getUsersNamesInAgeRange(users, gender) {
    const result =  users.filter(elem => elem.gender === gender).map(elem => elem.age).reduce((acc, item, index, arr) => {
        if(index === arr.length-1) {
            return (acc + item) / arr.length;
   } else {
       return acc + item;
   }
 } ,0)
    return result;
}

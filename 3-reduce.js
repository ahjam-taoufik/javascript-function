
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array



//   reduce() ========= number =========================

// let prod = [
//         { name: "Apple",  description: "asdf",    price: 18.00 },
//         { name: "Banana", description: "ghjklmn", price: 3.00  },
//         { name: "Kabab",  description: "ghjklmn", price: 4.00  },
//         { name: "cacaou",  description: "cacdesc", price: 9.00  },
//     ]
//     const total=prod.reduce((accum,item)=> accum +item.price,0 )
//     console.log(total);
    
    
//   reduce() ========= array =========================

// let array1=[ 
//                 [2,5] ,
//                 [4,3] ,
//                 [15,8]
//            ]

// let flat=array1.reduce((accu,arr)=> 
//             accu.concat(arr), 
//          [] 
//          )   

// console.log(flat);


// reduce Count =================================================

// let data = [
//     'car',
//     'truck',
//     'truck',
//     'car',
//     'bike',
//     'van',
//     'bike',
//     'car',
//     'car'
// ]
// let tab=data.reduce((obj, item) => {

//         if (!obj[item]) {
//         obj[item] = 0
//     }
//     obj[item]++
//     return obj;
// }, 
// {})


// console.log(tab);

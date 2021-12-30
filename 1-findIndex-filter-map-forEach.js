
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

console.log('function javascript')

const tab= [200,800,100,700,1200,500,50]

let products = [
    { name: "Apple",  description: "asdf",    price: 18.00 },
    { name: "Banana", description: "ghjklmn", price: 3.00  },
    { name: "Kabab",  description: "ghjklmn", price: 4.00  },
    { name: "cacaou",  description: "cacdesc", price: 9.00  },
]


////////// findIdex() /////////////////////////
// function findPosition(item){
//             for (let i = 0; i < tab.length; i++) {
//                 if(item == tab[i]) {
//                     return i
//                 }   
//             }
//             return -1
//         }
//  const index=findPosition(2200)       
// console.log(index)


// const index=tab.findIndex(function(item){
//        return item==700
//     }) 
// console.log(index)

/////////// filter() ///////////////////////////

// let res=tab.filter(function(item){
//     return item >= 700
//    })
//    console.log(res)


// let res=products.filter(function(product){
//          return product.price<10
//         })
//  console.log(res)       

// let res=products.filter(function(product){
//          return product.name.startsWith('B')
//         })
//  console.log(res)       





////////// map() /////////////////////////////
// let res=products.map(function(item){
//            return item.name
//          })
// console.log(res) 


///////////////forEach()/////////////////////
        // let sum=0
        // tab.forEach(el => {
        //     sum+=el
        // });
        // console.log(sum)




///////////////////// Chaining map, filter, and forEach//////////

// let sum=0
// products.filter(function(item){
//             return item.price <10 
//          })
//          .map(function(item){
//              return item.price
//          })
//          .forEach(function(item){
//                 sum+=item
//          })

// console.log(sum)







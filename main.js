let list1 = [5,8,10,4,6,1,2,3,9,7]
let list2 = [5,8,7,1,6,3,2,4]
let list3 = [3,1,11,15,8,18,10,13,5,4,17,6,2,14,9,7,12,16,]


function liftoff(instructions){
    return instructions.sort(function(a, b) {return b - a;}).join(' ') + ' liftoff!'
  }


console.log(liftoff(list1))
console.log(liftoff(list2))
console.log(liftoff(list3))
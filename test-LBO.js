export function maximumSubArray(n, chain){
  let indexChoosed
  const chainNumber = String(chain).split('').map(Number);
  const groups = [];
  for(let i = 0; i < chainNumber.length; i++){
    let count = [];
    for (let j = 0 ; j < n; j++){
      count.push(chainNumber[j+i])
    }
    groups.push(count)
  }
  const groupsFiltered = groups.filter(group => group.every(val => val !== undefined))
  const groupsFilteredMapped = groupsFiltered.map(group => group.reduce((acc, curr) => acc * curr))
  
  return Math.max(...groupsFilteredMapped);
} 

const test = maximumSubArray(5, 23232332323232)

console.log('result test', test)

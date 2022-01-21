let addToZero = (arr) => {
    let sum = []
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
  
        sum.push(arr[i] + arr[j])
      }
    }
    if (sum.includes(0)) {
      console.log(true)
    } else { console.log(false) }
  }
  
  
  addToZero([1, 2, 2])
//   O(n^2) runtime
//   This has an O(n^2) complexity

let hasUniqueChar = (str) => {
    let lower = str.toLowerCase()
    let arr = lower.split("")
  
    // console.log(arr)
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          
          return false
        }
      }
    }
  return true
  }
  

  hasUniqueChar('Monday')
//   O(n^2) Runtime
//   O(n^2) Complexity

let isPangram = (str)=>{

    // let string = str.toLowerCase().split("")
    
    let regex = /([a-z])(?!.*\1)/gi;
    return (str.match(regex)).length === 26;
    }
    isPangram('haii')

    // Runtime of O(1)
// This has a complexity of O(1)

let findLongestWord = (arr) =>{
    let length = []
  
    for(let i = 0; i<arr.length; i++){
      length.push(arr[i].length)
    }
  
    console.log(Math.max(...length))
  }
  
  
  
  
  findLongestWord(["hi", "hello"])

//   O(n) complexity and runtime
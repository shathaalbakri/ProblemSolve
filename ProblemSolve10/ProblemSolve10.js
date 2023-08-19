function checkRange(arr, A, B) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= A && arr[i] <= B) {
        continue;
      } else {
        return "no";
      }
    }
    return "yes";
   }
   
   const arr = [1, 4, 5, 2, 7, 8, 3];
   const A = 2;
   const B = 5;
   
   console.log(checkRange(arr, A, B));
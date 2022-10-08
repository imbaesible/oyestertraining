const arr = [2,2,2,2,4,4,4,4,4,5];
const counts = {};
let maxCount = 1, minCount = 1;

for (const num of arr) {
  counts[num] = counts[num] ? counts[num] + 1 : 1;
  maxCount = Math.max(maxCount, counts[num]);
  minCount = Math.min(minCount, counts[num]);
}

let maxVar = 0, minVar = 0;

for(let num in counts){
    if(counts[num] == maxCount) maxVar = num;
    if(counts[num] == minCount) minVar = num;
}

console.log(maxVar, minVar)


class Solution {
  // Function to get the maximum total value in the knapsack.
  fractionalKnapsack(w, arr, n) {
    // code here
    let profitsPerUnitOfWeight = arr.map(({ value, weight }) => {
      return {
        value,
        weight,
        profit: value / weight,
      };
    });
    profitsPerUnitOfWeight.sort((a, b) => b.profit - a.profit);
    let i = 0;
    let result = 0;
    while (i < n && profitsPerUnitOfWeight[i].weight <= w) {
      let { value, weight } = profitsPerUnitOfWeight[i];
      w -= weight;
      result += value;
      i++;
    }
    if (i < n && w) {
      let { value, weight } = profitsPerUnitOfWeight[i];
      result += (w * value) / weight;
    }
    return result;
  }
}

let sol = new Solution();
console.log(
  sol.fractionalKnapsack(
    50,
    [
      { value: 100, weight: 20 },
      { value: 60, weight: 10 },
      { value: 120, weight: 30 },
    ],
    3
  )
);
console.log(
  sol.fractionalKnapsack(
    50,
    [
      { value: 60, weight: 10 },
      { value: 100, weight: 20 },
    ],
    2
  )
);

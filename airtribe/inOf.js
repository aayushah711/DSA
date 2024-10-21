let obj = { b: 1 };

for (let key in obj) {
  console.log(key, obj[key]); // ["b", 1]
}
// for (let key of obj) {
//   // ($_$w , obj) is not iterable
//   console.log(obj[key]);
// }

let arr = ["a", "b"];
for (let key in arr) {
  console.log(key, arr[key]); // [ '0', 'a' ] [ '1', 'b' ]
}
for (let val of arr) {
  console.log(val); //  'a' 'b'
}

let set = new Set(arr);
console.log(set); // { 0: 'a', 1: 'b' }
console.log(set.has("a")); // true
for (let val of set) {
  console.log(val); // 'a' 'b'
}

let map = new Map();
map.set("a", 1);
map.set("b", 2);
console.log(map.get("a")); // 1
console.log(map.size); // 2
console.log(map.delete("b")); // true
for (let [key, val] of map) {
  console.log(key); // 'a'
  console.log(val); // 1
}

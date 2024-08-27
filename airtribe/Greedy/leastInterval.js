class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Helper Methods
  getLeftChildIndex(parentIndex) {
    return 2 * parentIndex + 1;
  }
  getRightChildIndex(parentIndex) {
    return 2 * parentIndex + 2;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  hasLeftChild(index) {
    return this.getLeftChildIndex(index) < this.size();
  }

  hasRightChild(index) {
    return this.getRightChildIndex(index) < this.size();
  }

  hasParent(index) {
    return this.getParentIndex(index) >= 0;
  }

  leftChild(index) {
    return this.heap[this.getLeftChildIndex(index)];
  }

  rightChild(index) {
    return this.heap[this.getRightChildIndex(index)];
  }

  parent(index) {
    return this.heap[this.getParentIndex(index)];
  }

  swap(indexOne, indexTwo) {
    const temp = this.heap[indexOne];
    this.heap[indexOne] = this.heap[indexTwo];
    this.heap[indexTwo] = temp;
  }

  size() {
    return this.heap.length;
  }

  peek() {
    if (this.size() === 0) {
      return null;
    }
    return this.heap[0];
  }

  // Removing an element will remove the
  // top element with highest priority then
  // heapifyDown will be called
  remove() {
    if (this.size() === 0) {
      return null;
    }
    const item = this.heap[0];
    this.heap[0] = this.heap[this.size() - 1];
    this.heap.pop();
    this.heapifyDown();
    return item;
  }

  add(item) {
    this.heap.push(item);
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size() - 1;
    while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  heapifyDown() {
    let index = 0;
    while (this.hasLeftChild(index)) {
      let largerChildIndex = this.getLeftChildIndex(index);
      if (
        this.hasRightChild(index) &&
        this.rightChild(index) > this.leftChild(index)
      ) {
        largerChildIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[largerChildIndex]) {
        break;
      } else {
        this.swap(index, largerChildIndex);
      }
      index = largerChildIndex;
    }
  }

  printHeap() {
    var heap = ` ${this.heap[0]} `;
    for (var i = 1; i < this.size(); i++) {
      heap += ` ${this.heap[i]} `;
    }
    console.log(heap);
  }
}

/**
 * @param {string[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  let hm = {};
  tasks.map((task) => {
    if (task in hm) hm[task]++;
    else hm[task] = 1;
  });

  let heap = new MaxHeap();
  for (let key in hm) {
    heap.add(hm[key]);
  }

  let result = 0;
  while (heap.size()) {
    let remainingTasks = [];
    let cycle = n + 1;
    while (cycle > 0 && heap.size()) {
      let val = heap.remove();
      if (val - 1) {
        remainingTasks.push(val - 1);
      }
      cycle--;
    }
    if (!remainingTasks.length) {
      result += n + 1 - cycle;
    } else {
      result += n + 1;
      remainingTasks.map((num) => heap.add(num));
    }
  }
  return result;
};
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 2)); // AB AB AB: 8
console.log(leastInterval(["A", "C", "A", "B", "D", "B"], 1)); // ABCDAB: 6
console.log(leastInterval(["A", "A", "A", "B", "B", "B"], 3)); // AB  AB  AB: 10
console.log(leastInterval(["D", "A", "D", "B", "D", "C", "D"], 2)); // DABDC D  D: 10
console.log(leastInterval(["D", "A", "D", "B", "D", "C", "D"], 1)); // DADBDCD: 7
console.log(
  leastInterval(["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"], 2)
); // ABCDABCDABCE: 12

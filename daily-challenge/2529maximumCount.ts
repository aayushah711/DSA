function maximumCount(nums: number[]): number {
    let N = nums.length
    let posIndex = -1
    let negIndex = -1

    let findFirstPositiveIndex = () => {
        let low = 0
        let high = N - 1
        while (low < high) {
            let mid = Math.floor((low + high) / 2)
            if (nums[mid] > 0) {
                high = mid - 1
                posIndex = mid
            }
            else {
                low = mid + 1
                posIndex = low
            }
        }
    }
    findFirstPositiveIndex()


    let findLastNegativeIndex = () => {
        let low = 0
        let high = posIndex === -1 ? N - 1 : posIndex
        while (low < high) {

            let mid = Math.floor((low + high) / 2)
            if (nums[mid] === 0) {
                high = mid - 1
                negIndex = high
            }
            else {
                low = mid + 1
                negIndex = low
            }
        }
    }
    findLastNegativeIndex()
    return Math.max(posIndex, negIndex)

};
console.log(maximumCount([-2, -1, -1, 1, 2, 3])) // 3
console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2])) // 3
console.log(maximumCount([5, 20, 66, 1314])) // 4

def aggressiveCows(stalls, k):
    # Write your code here.
    stalls.sort()
    low = 1
    high = stalls[-1]-stalls[0]
    res = 1

    def isValid(key):
        count = 1
        lastCow = stalls[0]
        for x in range(1, len(stalls)):
            if (stalls[x]-lastCow) >= key:
                count += 1
                lastCow = stalls[x]

        return count >= k

    while low <= high:
        mid = (low+high) // 2
        if isValid(mid):
            res = max(res, mid)
            low = mid+1
        else:
            high = mid-1

    return res


print(aggressiveCows([1, 2, 3], 2))
print(aggressiveCows([0, 3, 4, 7, 10, 9], 4))
print(aggressiveCows([4, 2, 1, 3, 6], 2))

print(aggressiveCows([18, 27, 44, 77, 69, 19, 35, 83, 9, 64], 4))

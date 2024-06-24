def floorSqrt(n):
    # write your code logic here .
    low = 0
    high = n

    while low <= high:
        mid = (low+high) // 2
        square = mid**2
        if square == n:
            return mid
        if square > n:
            high = mid-1
        else:
            low = mid+1

    return high


print(floorSqrt(7))
print(floorSqrt(100))
print(floorSqrt(122))

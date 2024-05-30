def lenOfLongIncSubArr( a, n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    count = 1
    res = 0
    #Code here
    for x in range(1,n):
        if a[x] > a[x-1]:
            count+=1
        else:
            res = max(res, count)
            count = 1
    res = max(res, count)
    return res
    
print(lenOfLongIncSubArr([13, 18, 12, 12, 20, 9, 9, 2, 17], 9))



# 9
# 13 18 12 12 20 9 9 2 17

# 9
# 5 6 3 5 7 8 9 1 2
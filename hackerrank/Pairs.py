# https://www.hackerrank.com/challenges/pairs/problem

def pairs(k, arr):
    i = j = nPairs = 0
    arr.sort()
    while i <= len(arr)-1 and j <= len(arr)-1:
        diff = arr[j]-arr[i]
        if diff == k:
            nPairs += 1
            j += 1
        elif diff > k:
            i += 1
        elif diff < k:
            j += 1
    return(nPairs)


if __name__ == '__main__':
    k = 2
    arr = [1, 3, 5, 8, 6, 4, 2]
    print(pairs(k, arr))

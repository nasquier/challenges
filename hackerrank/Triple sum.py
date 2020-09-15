# https://www.hackerrank.com/challenges/triple-sum/problem

def triplets(a, b, c):
    a, b, c = list(set(a)), list(set(b)), list(set(c))
    a.sort()
    b.sort()
    c.sort()
    results = 0
    ip = ir = -1
    for q in b:
        while ip+1 < len(a) and a[ip+1] <= q:
            ip += 1
        while ir+1 < len(c) and c[ir+1] <= q:
            ir += 1
        results += (ip+1)*(ir+1)
    return results


# Example
if __name__ == '__main__':
    a = [1, 3, 5, 7]
    b = [5, 7, 9]
    c = [7, 9, 11, 13]
    print(triplets(a, b, c))

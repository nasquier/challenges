# https://www.hackerrank.com/challenges/ctci-comparator-sorting/copy-from/171862242

from functools import cmp_to_key

class Player:
    def __init__(self, name, score):
        self.name = name
        self.score = score

    def __repr__(self):
        return " ".join([self.name, self.score])

    def comparator(a, b):
        if a.score < b.score:
            return 1
        elif a.score > b.score:
            return -1
        elif a.score == b.score:
            if a.name > b.name:
                return 1
            elif a.name < b.name:
                return -1
            elif a.name == b.name:
                return 0
            else:
                raise ValueError("Can't compare the two player's names.")
        else:
            raise ValueError("Can't compare the two player's scores.")


# Example
names = ["amy", "david", "heraldo", "aakansha", "aleksa"]
scores = [100, 100, 50, 75, 150]
n = len(names)
data = []
for i in range(n):
    player = Player(names[i], scores[i])
    data.append(player)

data = sorted(data, key=cmp_to_key(Player.comparator))
for i in data:
    print(i.name, i.score)

import json
import re

# store the rankings json file as a dictionary
f = open('rankings.json')
rankings = json.load(f)
f.close()

# populate a list of keeper players, remove them from the json, and overwrite rankings.json
f = open('keepers.txt', 'r', encoding='UTF-8')
keepers = []
for line in f:
    if re.compile('(^[A-Z].*? [A-Z].*?$)').match(line):
        keepers.append(str(line.rstrip()))

rankings['rankings'] = [player for player in rankings['rankings'] if str(player['name'].rstrip()) not in keepers]

with open ('rankings.json', 'w') as outfile:
    json.dump(rankings, outfile)

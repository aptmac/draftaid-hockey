# Credit to: https://github.com/jayjzheng/draftaid-react/blob/5a99a0b9f4cac4e4ccbfb36c86ecee19640969b3/data/fantasyProCsv.py

import json
import re
import requests
from bs4 import BeautifulSoup


url = "https://www.fantasypros.com/nhl/adp/overall.php"

def get_data():
    players = []
    r = requests.get(url)

    soup = BeautifulSoup(r.text, 'html.parser')
    rows = soup.find("tbody").find_all("tr")
    tier = 1
    counter = 1
    for row in rows:
        player = {}
        text = row.get_text().replace(u'\xa0', u'').split("\n")[:11]
        print(text)
        counter = counter + 1
        if counter % 20 == 0:
          tier = tier + 1
        # if "Tier" in text[0]:
          # tier = text[0].replace('Tier ', '')
        if len(text) > 1:
            rank = text[0]
            name = text[1]
            position = text[2]
            # best = text[3]
            # worst = text[4]
            average = text[5]
            stddev = text[6]
            name = re.match(r'(.*)\s([A-Z]+)', text[1]).group(1)
            team = re.match(r'(.*)\s([A-Z]+)', text[1]).group(2)
            player['tier'] = tier
            player['position'] = position
            player['name'] = name
            player['team'] = team
            player['best'] = best
            player['worst'] = worst
            player['average_rank'] = average
            player['std_dev'] = stddev
    return players

if __name__ == "__main__":
  players = {}
  players['rankings'] = get_data()
  with open('rankings.json', 'w') as outfile:
      json.dump(players, outfile)
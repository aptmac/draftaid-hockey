# Credit to: https://github.com/jayjzheng/draftaid-react/blob/5a99a0b9f4cac4e4ccbfb36c86ecee19640969b3/data/fantasyProCsv.py

import json
import re
import requests
from bs4 import BeautifulSoup


url = "https://www.fantasypros.com/nhl/rankings/overall.php"

def get_data():
    players = []
    r = requests.get(url)

    soup = BeautifulSoup(r.text, 'html.parser')
    #headings = [th.get_text() for th in soup.find_all("th")[:10] if 'style' in th.attrs]

    rows = soup.find("tbody").find_all("tr")
    tier = 1
    counter = 1
    for row in rows:
        player = {}
        text = row.get_text().replace(u'\xa0', u'').split("\n")[:11]
        counter = counter + 1
        if counter % 20 == 0:
          tier = tier + 1
        # if "Tier" in text[0]:
          # tier = text[0].replace('Tier ', '')
        if len(text) > 1:
            if "google" in text[2]:
                continue
            rank = text[0]
            name = text[1]
            team = text[2]
            best = text[3]
            worst = text[4]
            average = text[5]
            stddev = text[6]
            name = re.match(r'(.*[a-z])([A-Z]+)', text[1]).group(1)
            position = re.match(r'(.*[a-z])([A-Z]+)', text[1]).group(2)
            player['tier'] = tier
            player['position'] = position
            player['name'] = name
            player['team'] = team
            player['best'] = best
            player['worst'] = worst
            player['average_rank'] = average
            player['std_dev'] = stddev
        if player:
            players.append(player)
    return players

if __name__ == "__main__":
  players = {}
  players['rankings'] = get_data()
  with open('rankings.json', 'w') as outfile:
      json.dump(players, outfile)
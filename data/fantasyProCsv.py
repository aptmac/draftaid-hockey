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
            print(text)
            rank = text[0]
            best = text[2]
            worst = text[3]
            average = text[4]
            stddev = text[5]
            name = re.match(r'(.*)\(([A-Z]{2,3}).?-\s(C|RW|LW|D|G|NA)', text[1]).group(1)
            team = re.match(r'(.*)\(([A-Z]{2,3}).?-\s(C|RW|LW|D|G|NA)', text[1]).group(2)
            position = re.match(r'(.*)\(([A-Z]{2,3}).?-\s(C|RW|LW|D|G|NA)', text[1]).group(3)
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

import json

def load_keepers():
  with open('keepers.txt') as f:
    content = f.read().splitlines()
  return content
  
def remove_keepers():
  i = 0
  keepers = load_keepers()
  new_players = []
  with open('rankings-og.json') as json_file:    
    players = json.load(json_file)
    for player in players['rankings']:
      if player['name'] in keepers:
        i = i + 1
      else: 
        new_players.append(player)
  return new_players

    

if __name__ == "__main__":
  players = remove_keepers()
  with open('rankings.json', 'w') as outfile:
    json.dump(players, outfile)
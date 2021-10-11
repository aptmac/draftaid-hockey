# Draft Aid: Fantasy Hockey

## draftaid-react
This repository contains a modified version of Jay Zheng's draftaid-react project, which can be found at: https://github.com/jayjzheng/draftaid-react

## Installation and usage
I have included a script that can be used for easy local deployment. In the top level of this project, use the command ./run.sh from the terminal to have the project install, build, and run all at once. When built, the application will be served at http://localhost:3000.

This is a react based project, so the commands required to run this application are:

- Install: `npm install`
- Build: `npm run build`
- Run: `npm start`

Note that you will need to have npm installed and configured on your machine.

## Keepers

New for the 2021-2022 season is a script to remove players from the master json. You'll need a file called `keepers.txt` in the data folder, and it will need to have a list of players (one per line) that you want to have removed. The easiest way to populate this file is by visiting your Yahoo League's keeper view (i.e., `https://hockey.fantasysports.yahoo.com/hockey/$LEAGUE_ID/viewkeepers`), and copying all of the contents of the page into the keepers file. Then you can run `python remove_keepers.py` and the script will overwrite the `rankings.json` file with a new json that has the keepers removed.

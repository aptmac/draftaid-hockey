#!/bin/bash
cd data;
python fetch_data.py && python remove_keepers.py;
cd ../;
npm install;
npm run build;
npm start;

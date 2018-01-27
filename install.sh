#!/bin/bash
# For Ubuntu

echo "You must run this script as root"
sudo -v

npm install

sudo npm -i -s nodemon

echo "Thanks!"
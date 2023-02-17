#!/bin/bash

ln -s /usr/local/hugo/bin/hugo /usr/local/bin/hugo

git submodule update --init --recursive

npm install postcss-cli

echo "alias ll='ls -alF'" >> /etc/bash.bashrc
echo "alias g=git" >> /etc/bash.bashrc
#!/bin/sh

sleep .5
git add -A
sleep .5
echo 'Do NOT FORGET TO CHANGE .git/config'
echo 'url = git://github.com/BannerBomb/BannerBomb.github.io.git'
echo 'to url = https://github.com/BannerBomb/BannerBomb.github.io.git'
echo 'after Cloning the repo with git://github.com/BannerBomb/BannerBomb.github.io.git'
echo ' '
echo 'Continuing in 5...'
sleep .1
echo ''
sleep 5
git commit -m "https://github.com/BannerBomb/BannerBomb.github.io/repo"
sleep .3
git push -u origin master
sleep .6
git push
sleep .5
exit

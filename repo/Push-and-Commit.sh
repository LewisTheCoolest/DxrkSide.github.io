#!/bin/sh

sleep .5
git add -A
sleep .5
git commit -m "https://github.com/BannerBomb/BannerBomb.github.io/repo"
sleep .3
git push -u origin master
sleep .6
git push
sleep .5
exit

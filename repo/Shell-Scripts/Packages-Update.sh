#!/bin/sh

sleep .5
./dpkg-scanpackages Files /dev/null > Packages -m
sleep 3.5
rm -f ./Packages.gz
sleep .8
rm -f ./Packages.bz2
sleep .8
gzip -f -c9 Packages > Packages.gz
sleep 1.5
bzip2 -f -c9 Packages > Packages.bz2
wait .1
exit

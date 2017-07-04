#!/bin/sh

echo 'Getting File Packages-Update...'
sleep 1
cp -f Shell-Scripts/Packages-Update .
sleep .8
chmod u+x ./Packages-Update
sleep .5
./Packages-Update
sleep 3.5
echo 'Removing Packages-Update...'
sleep .5
rm -f ./Packages-Update
sleep .5
echo 'Finished with Packages-Update...'
sleep .5
echo 'Moving On...'
sleep .5
echo 'Getting File Push-an-Commit...'
sleep 1
cp -f Shell-Scripts/Push-and-Commit .
sleep .8
chmod u+x ./Push-and-Commit
sleep .5
./Push-and-Commit
sleep 3.5
echo 'Removing Push-and-Commit...'
sleep .5
rm -f ./Push-and-Commit
sleep .5
echo 'Finished Removing Push-and-Commit...'
sleep .5
echo 'Successfully finished updating and Pushing/Commiting the Repo'
sleep .5
echo 'Have a nice day!'
sleep .2
exit

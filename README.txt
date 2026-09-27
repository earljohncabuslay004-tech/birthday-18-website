# 18th Birthday Website

## What this website does

1. Shows HAPPY BIRTHDAY + the celebrant's name.
2. User clicks "Open Your Surprise" so the browser allows the music to start.
3. The birthday scene appears with:
   - Photo carousel above the cake
   - 18 candles/numbers
   - Three cake candles
   - Jeremiah 29:11 on the left
   - Proverbs 3:5–6 on the right
   - Birthday message on the cake
   - Happy Birthday music
4. Photos automatically change every 3.5 seconds.
5. Music loops and is set to run for 15 minutes.

## Replace the name

Open script.js:

const birthdayName = "NAME HERE";

Change it to the celebrant's name.

## Add photos

Put your photos inside the images folder and use filenames such as:

photo1.jpg
photo2.jpg
photo3.jpg
photo4.jpg
photo5.jpg

Then update the photos array in script.js if you use different filenames.

## Add music

Put your own Happy Birthday audio recording here:

music/happy-birthday.mp3

The website loops the audio. It will stop after 15 minutes.

## Important browser behavior

Modern browsers commonly block audio from autoplaying before the visitor interacts with the page. That's why the opening screen has an "Open Your Surprise" button. The click starts the music, then the birthday scene appears.

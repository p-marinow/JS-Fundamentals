function music (bandName, albumName, songName) {
    console.log(`The plate was rotated ${Math.ceil(((bandName.length * albumName.length)* songName.length / 2)/2.5)} times.`);
}

music('Black Sabbath', 'Paranoid', 'War Pigs');

function songs(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numbersOfSongs = Number(arr.shift());

    let songsArray = [];
    
    for (let i = 0; i < numbersOfSongs; i++) {
        let tokens = arr.shift().split("_");
        let typeList = tokens[0];
        let name = tokens[1];
        let time = tokens[2];

        let currentSong = new Song(typeList, name, time);
        songsArray.push(currentSong);
    }

    let lastElement = arr[0];
    
    for (let song of songsArray) {
        if(lastElement === "all") {
            console.log(song.name);
        } else if (lastElement === song.typeList) {
            console.log(song.name);
        }
    }
}

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
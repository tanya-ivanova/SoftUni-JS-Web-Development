function songs2(arr) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numbersOfSongs = Number(arr.shift());
    let lastElement = arr.pop();

    let songsArray = [];
    
    for (let i = 0; i < numbersOfSongs; i++) {
        let [typeList, name, time] = arr[i].split("_");
        let currentSong = new Song(typeList, name, time);
        songsArray.push(currentSong);
    }    
    
    if (lastElement === "all") {
        songsArray.forEach(x => console.log(x.name));
    } else {
        let filtered = songsArray.filter(x => x.typeList === lastElement);
        filtered.forEach(x => console.log(x.name));
    }    
}

songs2([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);
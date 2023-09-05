function Song(title, artist) {
    this.title = title;
    this.artist = artist;
}

Song.prototype.stop = function() {
    this.isPlaying = false;
};

Song.prototype.play = function() {
    this.isPlaying = true;
};

Song.prototype.isPlaying = null;


Playlist.prototype = Song.prototype;

function Playlist() {
    this.currentSongIndex = 0;
    this.songs = [];
    this.stop = function() {
        Playlist.prototype.stop();
        return `${this.songs[this.currentSongIndex]} stopped`;
    };
    this.add = function(song) {
        const { title } = song;
        this.songs.push(title);
        return this.songs;
    };
    this.play = function() {
        if(Playlist.prototype.isPlaying === null) {
            Playlist.prototype.play();
            return `${this.songs[this.currentSongIndex]} started to play`;
        } else {
            Playlist.prototype.play();
            return `${this.songs[this.currentSongIndex]} started`;
        }
    };
    this.next = function() {
        if(this.currentSongIndex + 1 === this.songs.length) {
            this.currentSongIndex = 0;
            Playlist.prototype.play();
            return `${this.songs[this.songs.length - 1]} stopped, ${this.songs[this.currentSongIndex]} started`;
        } else {
            Playlist.prototype.play();
            return `${this.songs[this.currentSongIndex]} stopped, ${this.songs[++this.currentSongIndex]} started`;    
        }
    };
}

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
const faded = new Song("Faded", "Alan Walder");

console.log(playlist.add(heyJude));
console.log(playlist.add(jaded));
console.log(playlist.add(faded));
console.log(playlist.play()); // Hey Jude started to play
console.log(playlist.next()); // Hey Jude stopped, Jaded started
console.log(playlist.next()); // Jaded stopped, Faded started
console.log(playlist.next()); // Faded stopped, Hey Jude started
console.log(playlist.stop()); // Hey Jude stopped
console.log(playlist.play()); // Hey Jude started
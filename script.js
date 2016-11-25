// alert('linked');
//let's construct and object class and some objects
function Song (name, artist, year, genre, playit){
    this.name = name;
    this.artist = artist;
    this.year = year;
    this.genre = genre;
    this.playit = playit;
}
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
let threelittlebirds = new Song ("Three Little Birds", "Bob Marley", 1977, "Feel Good", function(){
  console.log("playing 3 little birds");
});
let somewhereovertherainbow = new Song ("Somewhere Over the Rainbow", "Israel Kamakawiwoʻole", 1990, "Feel Good", "How");

let rectangle = new Polygon (10,20);


console.log(threelittlebirds);
console.log(somewhereovertherainbow);


document.getElementsByTagName('p')[0].innerHTML = threelittlebirds.artist;

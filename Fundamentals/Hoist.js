console.log(hello);
var hello = 'world';
// // var hello;
// // console.log(hello);
// // hello='world';
// ////////////////////////////////////////////////
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle;
// needle='heystack';
// test();
// function test(){
//     var needle;
//     needle='magnet';
//     console.log(needle);
// }
// the ansewer=magnet
/////////////////////////////////////////////////
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// var brendan;
// function print(){
//     brandan='only okay';
//     console.log(brandan);
// }
// brandan='super cool';
// console.log(brandan);
// the answer =super cool
/////////////////////////////////////////////////
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// var food;
// food='chicken';
// console.log(food);
// eat();
// function eat(){
//     var food;
//     food='half-chicken';
//     console.log(food);
//     food='gone';
// }
// the answer = chicken
// half-chicken
///////////////////////////////////////////////
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// the answer =errorrrrrrr
////////////////////////////////////////////////
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// function rewind() {
//   var genre;
//   genre = "rock";
//   console.log(genre);
//   genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);
// the answer =undefined,rock,r&blur,disco
/////////////////////////////////////////////////
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo);
//     dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// the answer = san,sea,bur,san
////////////////////////////////////////////
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// the answer ={ name: 'Chicago', students: 65, hiring: true },errorrrr

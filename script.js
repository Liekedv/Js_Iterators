//while loop
var colors = ["yellow", "blue", "red", "orange"]
var x=0;
while( x <= colors.length) {
  console.log(colors[x]);
  x++; 
}

//for loop
var colors = ["yellow", "blue", "red", "orange"];
for (let i = 0; i < colors.length; i++) { 
  console.log(colors[i]);
}

//forEach
var colors = ["yellow", "blue", "red", "orange"];
colors.forEach(element => console.log(element));

//1. While loop neemt 6 regels in beslag en de for loop 4 regels.
//2. forEacht neemt 2 regels in beslag.
//3. Minder foutgevoelig en makkelijker leesbaar. De code is korter en door de .forEach roep je al je de variabele op.
//4. 

const courses = {
  java: 10,
  javascript: 55,
  nodejs: 5,
  php: 15,
  css: 9
};

const keys = Object.keys(courses);

console.log(keys);

keys.forEach((key, index) => {
  console.log(`${key}: ${courses[key]}`);
});
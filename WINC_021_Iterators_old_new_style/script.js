const myColorArray = ['yellow', 'blue', 'red', 'orange']

// oude manieren
let i = 0;
while (i < myColorArray.length) {
  console.log(myColorArray[i]);
  i++;
}

for (let i = 0; i < myColorArray.length; i++) {
  console.log(myColorArray[i]);
}


myColorArray.forEach(Element => console.log(Element));

// 1: 5 & 3
// 2: 1
// 3: Geen ifinite loop meer;
// --> Je hoeft niet meer bij te houden met een i, bij welke iteratie je bent.
// --> Je hebt direct toegang tot het item waar je overheen loopt dmv het argument en de callback-functie die je de array-method geeft als argument.
// --> de naam "forEach" zegt ook meteen wat je gaat doen en is semantischer dan een while of for loop.

const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
  };
  
  for (x in myColors) {
    console.log(myColors[x]);
  }
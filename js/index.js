//Iteraction 1: Names and Input

const hacker1 = "quentin"
console.log(`The driver's name is ${hacker1}`)

const hacker2 = "olivier"
console.log(`The navigator's name is ${hacker2}`)

//Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
} else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters !`)
}

//Iteraction 3: Loops
//3.1
let hacker1UpperCase = hacker1.toUpperCase()
let driverSpace= ""
for (i=0; i < hacker1.length; i++) {
  driverSpace+= hacker1UpperCase[i] + " ";
}
console.log (driverSpace)

//3.2
let navigator = hacker2
let navigatorReverse= ""
for (i=navigator.length-1; i>=0 ;i--) {
  navigatorReverse+= navigator[i];
}
console.log (navigatorReverse)

//3.3
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let firstLetterHacker1 = hacker1[0]
let firstLetterHacker2 = hacker2[0]

for (i=0; i<alphabet.length; i++) {
  if (alphabet[i]=== firstLetterHacker1) {
    console.log("The driver's name goes first.");
    break;
  } else if (alphabet[i]===firstLetterHacker2){
    console.log("Yo, the navigator goes first definitely.");
    break;
  } else if (alphabet[i]=== firstLetterHacker1 && firstLetterHacker2){
    console.log("What?! You both have the same name?");
    break;
  }
}

//Bonus 1:

let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut euismod luctus tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas eu sem ut mauris rutrum vulputate. Proin faucibus eget quam non blandit. Praesent eget egestas tellus. Fusce vestibulum scelerisque orci quis interdum. Nunc porta ante id sagittis posuere. Etiam porta tincidunt diam, sit amet porttitor enim sodales nec. Integer rutrum neque arcu, vitae egestas risus commodo in Ut vel fermentum sapien, eget ullamcorper ipsum. Fusce sed tellus sed eros ullamcorper convallis. Nulla porttitor congue eros, id iaculis leo. In laoreet, quam a feugiat dignissim, tellus magna tincidunt erat, non cursus mi massa quis odio. Nulla leo mi, facilisis sit amet turpis vel, congue tincidunt dolor. Suspendisse potenti. Vivamus nisl libero, aliquet sit amet purus ac, euismod sodales augue. Sed tristique vitae sem nec sodales. Maecenas neque nibh, molestie eget quam sit amet, gravida congue tortor. Integer at dolor tincidunt, fermentum tortor et, consequat lacus. Ut eget luctus nunc, nec egestas sem. Vestibulum quis nibh iaculis, elementum quam efficitur, semper massa. Mauris ornare lacus ut ligula fermentum, id fringilla orci aliquam. Nunc eros elit, lobortis eget imperdiet sed, consequat quis nisi. Etiam eleifend diam in tellus scelerisque, eget sollicitudin nisl fringilla. In at metus ac eros gravida lacinia. In nec lacus et lacus dapibus iaculis sed id mi. Aliquam orci massa, sollicitudin non tellus sed, vulputate ultricies risus. Quisque a ullamcorper ante. Vestibulum id ullamcorper magna. Vestibulum suscipit volutpat massa, et tempus urna bibendum vitae. Vivamus ac eros quis massa scelerisque porta. Pellentesque finibus eros nunc. Curabitur facilisis ligula ut risus porttitor, vel dapibus turpis consequat. Etiam non nisi mattis, pellentesque risus in, lacinia nisi. Aenean ex sem, sollicitudin in augue sit amet, condimentum scelerisque lorem. Proin nec ante metus. Fusce ex diam, sollicitudin vitae placerat sed, aliquet ut lectus."

let emptyCount =""
for (i=0; i<paragraph.length; i++) {
  if (paragraph[i]===" "){
    emptyCount+= paragraph[i];
  }
}
console.log(emptyCount.length +1)

/*let countET = ""
for (i=0; i<paragraph.length; i++) {
  if (paragraph[i]=== " " && paragraph[i+1]==="e" && paragraph[i+2]==="t" && paragraph[i+3]=== " " ){
    countET = ;
  }
}
console.log(countET.length / 4) */

let countET = ""
for (i=0; i<paragraph.length; i++) {
  if (paragraph[i]=== " ") {
    if(paragraph[i+1]=== "e") {
      if (paragraph[i+2]==="t") {
        if (paragraph[i+3]===" ") {
          countET+=i;
        }
      }
    }
  }
}
  console.log(countET.length/4)
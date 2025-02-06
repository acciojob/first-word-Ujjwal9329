function firstWord(s) {
  return s.split(" ")[0]; // Split the string by space and return the first part
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));

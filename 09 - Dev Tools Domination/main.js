const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");
// Interpolated
console.log("Hello I'm %s and my friend is %s", "Ali", "Hamed");
// Styled
console.log("%c This is styled log", "font-size:50px; color: green");
// warning!
console.warn("Watch your back!");
// Error :|
console.error("Buuuuuuuuuuuuuuuuuug");
// Info
console.info("Animals can experience time differently from humans.");
// Testing
console.assert(2 > 3, "Hello");
// clearing
console.clear();
// Viewing DOM Elements
const p = document.querySelector("p");

console.log(p);
console.dir(p);
// Grouping together
for (const dog of dogs) {
  console.groupCollapsed(dog.name);
  console.log(`name: ${dog.name}`);
  console.log(`age: ${dog.age}`);
  console.groupEnd(dog.name);
}
// counting
console.count("you");
console.count("me");
console.count("me");
console.count("you");
console.count("me");
console.count("you");
console.count("me");
console.count("me");
console.count("you");
console.count("you");
// timing
console.time();
fetch("https://api.github.com/users/wesbos")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd();
    console.log(data);
  });

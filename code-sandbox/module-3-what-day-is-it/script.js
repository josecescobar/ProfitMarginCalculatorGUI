var weekday = new Date().toLocaleString("en-US", { weekday: "long" });

// console.log(weekday);

if (weekday === "Monday") {
  console.log("Let's get this week started!");
} else if (weekday === "Tuesday") {
  console.log("Another day, another task");
} else if (weekday === "Wednesday") {
  console.log("Almost there!");
} else if (weekday === "Thursday") {
  console.log("Almost there!");
} else if (weekday === "Friday") {
  console.log("Almost there!");
} else {
  console.log("Weekend!");
}

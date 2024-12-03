var chocolate = Number(
  prompt("How many pieces of chocolate would you like? Choose 0 to 10")
);

var leftOverChocolate = 10 - chocolate;

if (leftOverChocolate === 10) {
  alert("You dont like chocolate?");
} else if (leftOverChocolate === 6) {
  alert(`There are ${leftOverChocolate} pieces left. Still have plenty!`);
} else if (leftOverChocolate >= 1) {
  alert(`There are ${leftOverChocolate} pieces left.`);
} else {
  alert("We don't have that many pieces left.");
}

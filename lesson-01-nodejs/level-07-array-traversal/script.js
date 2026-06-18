const letters = [
  "aaa",
  "bbb",
  "ccc",
  "eee",
  "fff",
  "ggg",
  "hhh",
  "iii",
  "jjj",
  "kkk",
];

for (let index = 0; index < letters.length; index++) {
  const item = letters[index];
  const itemNumber = index + 1;
  console.log(`${itemNumber}. ${item}`);
}

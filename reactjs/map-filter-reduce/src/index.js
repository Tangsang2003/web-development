import emojipedia from "./emojipedia";
console.log(emojipedia);

const newArray = emojipedia.map((item) => {
  return item.meaning.substring(0, 100);
});

console.log(newArray);

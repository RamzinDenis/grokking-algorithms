/* 
goes down to basic case, returns 0

goes up and compare 0 with the first element, than if it bigger goes more upward and continue comparison

*/

// Найти самый большой элемент

const list = [1, 6, 10, 13, 3];

function findBiggest(list) {
  if (!list.length) return 0;
  const biggest = findBiggest(list.slice(1));

  return list[0] > biggest ? list[0] : biggest;
}

console.log(findBiggest(list));

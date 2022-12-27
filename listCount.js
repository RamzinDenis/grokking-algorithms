function listLengthCount(list) {
  if (!list.next) return 1;

  return 1 + listLengthCount(list.next);
}

function findBiggest(list, biggest = 0) {
  if (!list.next) return list.value > biggest ? list.value : biggest;

  return findBiggest(list.next, list.value > biggest ? list.value : biggest);
}

console.log(
  findBiggest({
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: null,
      },
    },
  })
);

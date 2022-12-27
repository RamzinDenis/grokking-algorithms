const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const checkIfSeller = (name, seller) => name === seller;

const search = (name) => {
  const searchQueue = graph["you"];
  const searched = [];

  while (searchQueue.length) {
    const person = searchQueue.shift();

    if (searched.includes(person)) continue;

    if (checkIfSeller(name, person)) return true;
    else {
      searchQueue.push(...graph[person]);
      searched.push(person);
    }
  }

  return false;
};

console.log(search("an"));

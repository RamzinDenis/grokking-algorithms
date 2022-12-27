const graph = {
  start: {
    a: 6,
    b: 2,
  },
  a: {
    end: 1,
  },
  b: {
    a: 3,
    end: 5,
  },
  end: {},
};

const costs = {
  a: 6,
  b: 2,
  end: Infinity,
};

const parents = {
  a: "start",
  b: "start",
  end: undefined,
};

const processed = [];

function findLowestCostNode(costs) {
  let lowestCost = Infinity;
  let lowestCostNode;

  for (let node in costs) {
    if (costs[node] < lowestCost && !processed.includes(node)) {
      lowestCost = costs[node];
      lowestCostNode = node;
    }
  }

  return lowestCostNode;
}

function getToEnd() {
  let node = findLowestCostNode(costs);
  const cost = costs[node];

  while (node) {
    for (let neighborNode of Object.keys(graph[node])) {
      const newCost = cost + graph[node][neighborNode];

      if (newCost < costs[neighborNode]) {
        parents[neighborNode] = node;
        costs[neighborNode] = newCost;
      }
    }

    processed.push(node);
    node = findLowestCostNode(costs);
  }

  const path = [];
  let key = parents.end;
  for (let prop in parents) {
    if (!parents[key]) break;
    path.push(parents[key]);
    key = parents[key];
  }

  return [parents.end, ...path].reverse();
}

console.log(getToEnd());

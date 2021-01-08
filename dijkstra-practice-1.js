const graph = {
  start: {
    a: 10,
  },
  a: {
    b: 20,
  },
  b: {
    c: 1,
    fin: 30,
  },
  c: {
    a: 1,
  },
  fin: {},
};

const costs = {
  a: 10,
  b: Infinity,
  c: Infinity,
  fin: Infinity,
};

const parents = {
  a: "start",
  b: null,
  c: null,
  fin: null,
};

let processed = [];

function findLowestCostNode(costs) {
  let lowestCostNode = null;
  let lowestCost = Infinity;

  for (let node in costs) {
    const cost = costs[node];

    if (cost < lowestCost && processed.indexOf(node) === -1) {
      lowestCost = cost;
      lowestCostNode = node;
    }
  }
  return lowestCostNode;
}

let node = findLowestCostNode(costs);

while (node !== null) {
  const neighbors = graph[node];
  const cost = costs[node];

  Object.keys(neighbors).forEach((neighborNode) => {
    const newCost = cost + neighbors[neighborNode];

    if (newCost < costs[neighborNode]) {
      costs[neighborNode] = newCost;
      parents[neighborNode] = node;
    }
  });

  processed = processed.concat(node);
  node = findLowestCostNode(costs);
}

console.log(parents, costs);

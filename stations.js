let statesNeeded = new Set(["mt", "wa", "or", "id", "nv", "ut", "са", "az"]);

const stations = {};
stations["kone"] = new Set(["id", "nv", "ut"]);
stations["ktwo"] = new Set(["wa", "id", "mt"]);
stations["kthree"] = new Set(["or", "nv", "са"]);
stations["kfour"] = new Set(["nv", "ut"]);
stations["kfive"] = new Set(["ca", "az"]);

const finalStations = new Set();

while (statesNeeded.size) {
  let bestStation;
  let statesCovered = new Set();

  for (let station in stations) {
    const stationStates = stations[station];
    const covered = new Set(
      [...statesNeeded].filter((state) => stationStates.has(state))
    );
    if (covered.size > statesCovered.size) {
      bestStation = station;
      statesCovered = covered;
    }
  }

  statesNeeded = new Set(
    [...statesNeeded].filter((state) => !statesCovered.has(state))
  );

  finalStations.add(bestStation);
}

console.log(finalStations);

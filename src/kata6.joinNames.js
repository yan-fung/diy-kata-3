const joinNames = namesObj => {
let nameList = "";

  for (let i = 0; i < namesObj.length; i++) {
    if (i < namesObj.length - 2) {
      nameList = nameList + namesObj[i].name + ", ";
    }
    if (i === namesObj.length - 2) {
      nameList = nameList + namesObj[i].name + " & ";
    }
    if (i === namesObj.length - 1) {
      nameList = nameList + namesObj[i].name;
    }
  }
  return nameList;
};

module.exports = joinNames;

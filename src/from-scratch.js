// find
const getUserById = (users, id) => {
  const rightID = (users) => {
    if (users.id === id) {
      return users;
    };
  }
  return users.find(rightID);
};

// findIndex
const getIndexOfApple = (foods) => {
  const appleIndex = (foods) => {
    if (foods.name === "apple") {
      return true;
    };
  }
  return foods.findIndex(appleIndex);
};

// reduce
const getSquaredTotal = (arrOfNumbers) => {
  return arrOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue * currentValue;
  }, 0)
};

// every
const hasOnlyEvenNumbers = (arrOfNumbers) => {
  if (arrOfNumbers.length === 0) {
    return false;
  } else {
    return arrOfNumbers.every((nums) => nums % 2 === 0)
  }
};

// some
const anyGreaterThan10 = (arrOfNumbers) => {
  if (arrOfNumbers.length === 0) {
    return false;
  } else {
    return arrOfNumbers.some((nums) => nums > 10)
  }
};

// Use your judgement to decide which array method to use!
const roundAll = (arrOfNumbers) => {
  if (arrOfNumbers.length === 0) {
    return arrOfNumbers;
  } else {
    return arrOfNumbers.map((nums) => Math.round(nums))
  }
};

const onlyStrings = () => { };

const stringsToLength = () => { };

const totalGreaterThanGiven = () => { };

const numberOfLongWords = () => { };

const numberOfCharacters = () => { };

const removeJerkFromCompany = () => { };

const chosenCoordinates = () => { };

// Sorting Functions
const sortWords = () => { };

const sortNumbers = () => { };

const sortNumbersBetter = () => { };

const sortUsersByOrder = () => { };

const sortUsersByName = () => { };

module.exports = {
  getUserById,
  getSquaredTotal,
  hasOnlyEvenNumbers,
  getIndexOfApple,
  numberOfCharacters,
  anyGreaterThan10,
  roundAll,
  removeJerkFromCompany,
  onlyStrings,
  chosenCoordinates,
  stringsToLength,
  totalGreaterThanGiven,
  numberOfLongWords,
  sortWords,
  sortNumbers,
  sortNumbersBetter,
  sortUsersByOrder,
  sortUsersByName,
};

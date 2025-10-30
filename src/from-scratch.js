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

const onlyStrings = (arrOfValues) => {
  let onlyString = arrOfValues.filter((arrOfValues) => {
    if (typeof arrOfValues == "string") {
      return true;
    }
  })
  return onlyString.map((arrOfValues) => {
    return arrOfValues;
  });
};

const stringsToLength = (arrOfStrings) => {
  return arrOfStrings.map((element) => {
    return element.length;
  });
};

const totalGreaterThanGiven = (arrOfNumbers, num) => {
  const sum = arrOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum > num;
};

const numberOfLongWords = (arrOfWords) => {
  let moreThan4 = arrOfWords.filter(words => words.length >= 4)
  return moreThan4.length;

};

const numberOfCharacters = (string) => {
  const characters = {};
  eachChar = string.split("");
  eachChar.forEach((char) => {
    if (characters[char]) {
      characters[char]++;
    } else {
      characters[char] = 1;
    }
  })
  return characters;
};

const removeJerkFromCompany = (arrOfPeople) => {
  const findTheBad = arrOfPeople.findIndex((people) => (people.personality === "jerk"))
  arrOfPeople.splice(findTheBad, 1)
};

const chosenCoordinates = (arrOfCoordinates, num) => {
  return arrOfCoordinates.find((coordinate) => coordinate[0] + coordinate[1] === num)
};

// Sorting Functions
const sortWords = (arrOfWords) => {
  const sortedWords = arrOfWords.map((word) => word);
  return sortedWords.sort();
};

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

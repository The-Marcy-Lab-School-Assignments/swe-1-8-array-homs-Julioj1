const filterVipUsers = (users, vipUserIdsSet) => {
  const vipUserObjects = users.filter((user) => (vipUserIdsSet.has(user.id)))
  return vipUserObjects;
};

const multiplicativeAverage = (nums) => {
  const product = nums.reduce((accumulator, currentValue) => {
    return accumulator *= currentValue;
  }, 1)
  return product / nums.length
};

module.exports = {
  filterVipUsers,
  multiplicativeAverage,
};

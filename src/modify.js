const filterVipUsers = (users, vipUserIdsSet) => {
  const vipUserObjects = users.filter((user) => (vipUserIdsSet.has(user.id)))
  return vipUserObjects;
};

const multiplicativeAverage = (nums) => {
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    product *= num;
  }

  return product / nums.length;
};

module.exports = {
  filterVipUsers,
  multiplicativeAverage,
};

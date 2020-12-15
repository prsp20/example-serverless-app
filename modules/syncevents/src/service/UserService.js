import _ from 'lodash';

const createUser = (name) => {
  var sortedArray = [1, 1, 2, 3, 3, 3, 5, 8, 8];
  var result = _.sortedUniq(sortedArray);
  return {name: name, email: 'prsp20@gmail.com', numbers: result}
};

export {createUser};

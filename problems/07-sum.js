'use strict';

module.exports = function sum(numArray) {
  return numArray.reduce(function(total, curr){
    return (typeof(curr) !== 'number' ? total : total + curr );
  }, 0);
};

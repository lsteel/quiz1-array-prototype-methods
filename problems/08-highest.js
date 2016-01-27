'use strict';

module.exports = function highest(numArray) {
  return numArray.reduce(function(highest, curr){
    return (typeof(curr) === 'number' && curr > highest || highest == null ? curr : highest );
  }, null);
};

const { BadRequestError } = require("./expressError");

/** Convert strNums like ["1","2","3"] to [1, 2, 3]. */

function convertStrNums(strNums) {
  // if the conversion isn't successful, throw a BadRequestError and will
  // be handled in your route
  for (let i = 0; i < strNums; i++) {
    if (parseInt(num, 10) === NaN) {
      break;
    }
    return parseInt(num, 10);
  }
  return NaN;
}

module.exports = { convertStrNums };

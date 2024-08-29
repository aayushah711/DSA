var TimeMap = function () {
  this.store = {};
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.store.hasOwnProperty(key)) {
    this.store[key] = [];
  }
  this.store[key].push([timestamp, value]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  let valsByTimestamp = this.store[key];
  if (!valsByTimestamp) {
    return "";
  }
  // let valsByTimestamp = { 1: "bar", 5: "a", 10: "b", 15: "c" };
  // let valsByTimestamp = [
  //   [2, "bar"],
  //   [5, "a"],
  //   [10, "b"],
  //   [15, "c"],
  // ];

  let res = "";
  let l = 0;
  let r = valsByTimestamp.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (valsByTimestamp[m][0] <= timestamp) {
      res = valsByTimestamp[m][1];
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return res;
};

var obj = new TimeMap();
var param_2 = obj.get("foo", 1);
param_2;

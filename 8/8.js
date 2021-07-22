function keysAndValues(obj) {
  var keys = Object.keys(obj);
  keys.sort();

  var vals = [];

  keys.forEach(item => vals.push(obj[item]));
  return [keys, vals];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));

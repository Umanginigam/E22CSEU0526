const cache = {};

function get(key) {
  return cache[key];
}

function set(key, data) {
  cache[key] = data;
}

module.exports = { get, set };

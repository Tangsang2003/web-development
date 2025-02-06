const pi = 3.1415;

function doublePi() {
  return pi * 2;
}

function triplePi() {
  return pi * 3;
}

export default pi;
// We export multiple items like this
export { doublePi, triplePi };

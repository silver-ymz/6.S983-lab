const runs = 10;

function measureOneLine() {
  const LINE_SIZE = 16; // 128/sizeof(double) Note that js treats all numbers as double
  let result = [];

  // Fill with -1 to ensure allocation
  const M = new Array(runs * LINE_SIZE).fill(-1);

  for (let i = 0; i < runs; i++) {
    const start = performance.now();
    let val = M[i * LINE_SIZE];
    const end = performance.now();

    result.push(end - start);
  }

  return result;
}

const N = 1000000;
function measureNLines() {
  const LINE_SIZE = 16;
  let result = [];

  // TODO: Exercise 1-1
  const M = new Array(LINE_SIZE * N).fill(-1);

  for (let i = 0; i < runs; i++) {
    const start = performance.now();

    for (let j = 0; j < N; j++) {
      let val = M[j * LINE_SIZE + i % LINE_SIZE];
    }

    const end = performance.now();

    result.push(end - start);
  }
  result.sort((a, b) => a - b);

  return result;
}

document.getElementById(
  "exercise1-values"
).innerText = `1 Cache Line: [${measureOneLine().join(", ")}]`;

document.getElementById(
  "exercise2-values"
).innerText = `N Cache Lines: [${measureNLines().join(", ")}]`;

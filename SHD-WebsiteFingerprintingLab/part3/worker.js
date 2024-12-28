// Number of sweep counts
// TODO (Exercise 3-1): Choose an appropriate value!
let P = 1000;

// Number of elements in your trace
let K = 5 * 1000 / P; 

// Array of length K with your trace's values
let T;

// Value of performance.now() when you started recording your trace
let start;

const LINE_SIZE = 16;
const LLC_SIZE = 8 * 1024 * 1024;
const N = LLC_SIZE / LINE_SIZE;
let M = new Array(LLC_SIZE / 8).fill(-1);

function record() {
  // Create empty array for saving trace values
  T = new Array(K);

  // Fill array with -1 so we can be sure memory is allocated
  T.fill(-1, 0, T.length);

  // Save start timestamp
  start = performance.now();

  // TODO (Exercise 3-1): Record data for 5 seconds and save values to T.
  for (let i = 0; i < K; i++) {
    let count = 0;
    start = performance.now();
    while (performance.now() < start + P) {
      for (let j = 0; j < N; j++) {
        // ans += M[j * LINE_SIZE];
      }
      count++;
    }
    T[i] = count;
  }

  // Once done recording, send result to main thread
  postMessage(JSON.stringify(T));
}

// DO NOT MODIFY BELOW THIS LINE -- PROVIDED BY COURSE STAFF
self.onmessage = (e) => {
  if (e.data.type === "start") {
    setTimeout(record, 0);
  }
};

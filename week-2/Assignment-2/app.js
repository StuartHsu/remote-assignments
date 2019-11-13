function calculate(args) {
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else {
    result = "Not supported";
  }
  return result;
}

// Try to call calculate function correctly
/*

For example, if we have an add function like this:

  function add(args) {
    return args.n1 + args.n2;
  }

We can call it by passing an object created by JSON literal:

  add({n1: 3, n2: 4}); // your first way

You should find another way to create a proper object.

                      // your second way

*/

// first way
calculate({op: '+', n1: 2, n2: 3});
// console.log(calculate({op: '+', n1: 2, n2: 3}));

//r second way
class Args {
  constructor(op, n1, n2) {
    this.op = op,
    this.n1 = n1,
    this.n2 = n2
  }
}

const test = new Args('+', 2, 3);
calculate(test);
// console.log(calculate(test));

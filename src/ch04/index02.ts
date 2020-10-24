// function call(f: (...args: unknown[]) => unknown, ...args: unknown[]): unknown {
//   return f(...args);
// }

function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  // args[1] = 42;
  // args = [12, 'b'];
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({length}, () => value);
}

// console.log(fill(10, 'a'));
console.log(call(fill, 10, 'a'));

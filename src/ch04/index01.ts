console.log("Test");

// type Filter = {
//   (array: number[], f: (item: number) => boolean): number[]
//   (array: string[], f: (item: string) => boolean): string[]
//   (array: object[], f: (item: object) => boolean): object[]
// }

type Filter = <T>(array: T[], f: (item: T) => boolean) => T[];
// type Filter2<T> = (array: T[], f: (item: T) => boolean) => T[];

const filter: Filter = (array, f) => {
  const ret = [];
  for (const item of array) {
    if (f(item)) {
      ret.push(item);
    }
  }
  return ret;
}

// const r1 = filter(['', 'qwe'], _ => true);
// const r2 = filter([32, 42], _ => true);

// const ar2 = [1, 2, 3].map(_ => _ * 1);

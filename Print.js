class Printer {
  print(...values) {
    console.log(...values);
  }
}

export const print = (...args) => {
  const j = new Printer();

  if (args.length > 0) {
    return j.print(...args);
  }

  console.log("no data in params");
  return "no data in params";
};
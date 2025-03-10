class Printer {
  print(...values) {
    console.log(...values);
  }
}

export const print = (...values) => {
  const { print } = new Printer();

  if (values.length > 0) {
    return print(...values);
  }

  console.log("no data in params");
  return "no data in params";
};


requi


const printHi = (name, cb) => {
  setTimeout(() => {
    let result = "Helo, Mr. " + name;
    cb(result)
  }, 500);
}

console.log(printHi("Yousef", (result) => {
  return result
}));
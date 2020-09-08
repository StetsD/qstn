const logOne = cb => {
  setTimeout ( function () {
    cb('One');
  }, Math.random () * 1000 );
}

const logTwo = cb => {
  setTimeout ( function () {
    cb('Two');
  }, Math.random () * 1000 );
}

const logThree = cb => {
  setTimeout ( function () {
    cb('Three');
  }, 0 );
}

const logFour = cb => {
  cb('Four');
}

inOrder(logOne, logTwo, logThree, logFour, result => {
  console.log(result);
});

function inOrder() {
  const mapRes = {};
  const result = [];
  const args = [...arguments];
  const cb = args.pop()

  for (const i in args) {
    arguments[i](log => {
      mapRes[i] = log;
      if (Object.keys(mapRes).length === args.length) {
        Object.keys(mapRes).forEach(key => result.push(mapRes[key]));
        cb(result);
      }
    });
  }
}
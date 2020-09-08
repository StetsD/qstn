function reversePrint2(linkedList) {
  const result = [];

  const rec = (data, res) => {
    for (const key in data) {
      if (key === 'value')
        res.push(data[key]);

      if (key === 'next') {
        rec(data[key], res);
      }
    }
  }

  rec(linkedList, result);

  return result.reverse();
}

function reversePrint(linkedList) {
  const result = [];
  while (linkedList && linkedList.value) {
    result.push(linkedList.value);
    linkedList = linkedList.next;
  }
  return result.reverse();
}

const someList = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log(reversePrint(someList));
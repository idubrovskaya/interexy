function bubbleSort(arr: []) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}

const selectionSort = (arr: []) => {
  for (let i = 0, l = arr.length, k = l - 1; i < k; i++) {
    let indexMin = i;
    for (let j = i + 1; j < l; j++) {
      if (arr[indexMin] > arr[j]) {
        indexMin = j;
      }
    }
    if (indexMin !== i) {
      [arr[i], arr[indexMin]] = [arr[indexMin], arr[i]];
    }
  }
  return arr;
};

self.onmessage = async function (event) {
  const { arr1 } = event.data;
  const { arr2 } = event.data;

  const sortRes = await bubbleSort(arr1);
  const sortRes2 = await selectionSort(arr2);

  self.postMessage({ sortRes, sortRes2 });
};

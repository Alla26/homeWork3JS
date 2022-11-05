function compareArrays(arr1, arr2) {
  /* let result;
  if (arr1.length === arr2.length) {
    return (result = arr1.every((value, i) => value === arr2[i]));
  }
  return false;*/
  return arr1.length === arr2.length && arr1.every((value, i) => value === arr2[i]);
}

function advancedFilter(arr) {
  /*let resultArr;
  positiveArr = arr.filter((element) => element > 0);
  multipleOfThreeArr = positiveArr.filter((element) => element % 3 === 0);
  resultArr = multipleOfThreeArr.map((element) => element * 10);
  return resultArr;*/
  return arr
    .filter((element) => element > 0)
    .filter((element) => element % 3 === 0)
    .map((element) => element * 10);
}

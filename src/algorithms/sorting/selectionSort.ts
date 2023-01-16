class SelectionSort {
  sort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
      let min = i;

      for (let j = i + 1; j < array.length; j++) {
        if (array[min] > array[j]) {
          min = j;
        }
      }

      [array[min], array[i]] = [array[i], array[min]];
    }

    return array;
  }
}
export default SelectionSort;

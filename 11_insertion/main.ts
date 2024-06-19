function insertionSort(numbers: number[]): number[] {
  for (let i = 1; i < numbers.length; i++) {
    const temp = numbers[i];
    let j = i - 1;
    while (j >= 0 && numbers[j] > temp) {
      numbers[j + 1] = numbers[j];
      j--;
    }
    numbers[j + 1] = temp;
  }
  console.log({ numbers });
  return numbers;
}
insertionSort([5, 3, 2, 1, 4]);

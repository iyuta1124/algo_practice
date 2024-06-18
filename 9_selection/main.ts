function selectSort(numbers: number[]): number[] {
  for (let i = 0; i < numbers.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }
    const temp = numbers[i];
    numbers[i] = numbers[minIndex];
    numbers[minIndex] = temp;
  }
  console.log({ numbers });
  return numbers;
}

selectSort([5, 3, 2, 1, 4]);

function insertionSort(numbers) {
    for (var i = 1; i < numbers.length; i++) {
        var temp = numbers[i];
        var j = i - 1;
        // while (temp <= numbers[j]) {
        //   numbers[j + 1] = numbers[j];
        //   j--;
        // }
        while (j >= 0 && numbers[j] > temp) {
            numbers[j + 1] = numbers[j];
            j--;
        }
        numbers[j + 1] = temp;
    }
    console.log({ numbers: numbers });
    return numbers;
}
insertionSort([5, 3, 2, 1, 4]);

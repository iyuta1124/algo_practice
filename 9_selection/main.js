function selectSort(numbers) {
    for (var i = 0; i < numbers.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[j] < numbers[minIndex]) {
                minIndex = j;
            }
        }
        var temp = numbers[i];
        numbers[i] = numbers[minIndex];
        numbers[minIndex] = temp;
    }
    console.log({ numbers: numbers });
    return numbers;
}
selectSort([5, 3, 2, 1, 4]);

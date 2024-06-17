function bubbleSort(numbers) {
    console.log(numbers);
    for (var i = 0; i < numbers.length; i++) {
        for (var j = 0; j < numbers.length - 1 - i; j++) {
            if (numbers[j] > numbers[j + 1]) {
                var temp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = temp;
            }
        }
    }
    console.log(numbers);
}
bubbleSort([1, 4, 3, 5, 2]);

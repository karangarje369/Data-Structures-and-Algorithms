function merge(arr, low, mid, high) {
    let temp = []; // Temporary array to store merged result
    let i = low;   // Starting index of the left half
    let j = mid + 1; // Starting index of the right half

    // Merge the two halves into the temp array
    while (i <= mid && j <= high) {
        if (arr[i] < arr[j]) {
            temp.push(arr[i]); // Add the smaller element to temp
            i++;
        } else {
            temp.push(arr[j]); // Add the smaller element to temp
            j++;
        }
    }

    // Copy remaining elements of the left half, if any
    while (i <= mid) {
        temp.push(arr[i]);
        i++;
    }

    // Copy remaining elements of the right half, if any
    while (j <= high) {
        temp.push(arr[j]);
        j++;
    }

    // Copy the sorted elements from temp back to arr
    for (let k = 0; k < temp.length; k++) {
        arr[low + k] = temp[k];
    }
}

function merge_sort(arr, low, high) {
    if (low < high) {
        let mid = Math.floor(low + (high - low) / 2); // Ensure mid is an integer
        merge_sort(arr, low, mid); // Sort the left half
        merge_sort(arr, mid + 1, high); // Sort the right half
        merge(arr, low, mid, high); // Merge the two halves
    }
    return arr; // Return the sorted array
}

let arr = [11, 2, 3, 400, 700];
let n = arr.length;
let result = merge_sort(arr, 0, n - 1);
console.log(result); // Output: [2, 3, 11, 400, 700]
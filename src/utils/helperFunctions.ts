/**
 * @function partition - Helper function for quickSort
 */
export const swap = (array: any[], i: number, j: number) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};
/**
 * @function partition - Helper function for quickSort
 */
export const partition = (array: any[], low: number, high: number) => {
    // pivot
    let pivot = array[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, i, j);
        }
    }
    swap(array, i + 1, high);
    return i + 1;
};
/**
 * @function merge - Helper function for mergeSort algorithm
 */
export const merge = (arr: any[], left: any, middle: any, right: any) => {
    let n1 = middle - left + 1;
    let n2 = right - middle;
    // Create temp arrays
    let L = new Array(n1);
    let R = new Array(n2);
    // Copy data to temp arrays L[] and R[]
    for (let i = 0; i < n1; i++) {
        L[i] = arr[left + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[middle + 1 + j];
    }
    // Merge the temp arrays back into arr[left..right]
    // Initial index of first subarray
    let i = 0;
    // Initial index of second subarray
    let j = 0;
    // Initial index of merged subarray
    let k = left;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    } // Copy the remaining elements of // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    } // Copy the remaining elements of // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
};

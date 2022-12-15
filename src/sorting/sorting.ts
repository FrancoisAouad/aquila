import * as helpers from '../utils/helperFunctions';

export const quickSort = (array: any[], low: number, high: number) => {
    if (low < high) {
        let pi = helpers.partition(array, low, high);
        quickSort(array, low, pi - 1);
        quickSort(array, pi + 1, high);
    }
    return array;
};
export const mergeSort = (array: any[], left: any, right: any) => {
    if (left >= right) {
        return;
    }
    let middle: any = left + parseInt(`${(right - left) / 2}`);
    mergeSort(array, left, middle);
    mergeSort(array, middle + 1, right);
    helpers.merge(array, left, middle, right);
    return array;
};
export default { quickSort, mergeSort };

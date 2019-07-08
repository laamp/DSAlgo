function quickSort(array) {
    if (array.length <= 1) return array;

    let mid = array.pop();
    let left = array.filter(el => el < mid);
    let right = array.filter(el => el >= mid);

    let leftSorted = quickSort(left);
    let rightSorted = quickSort(right);

    return [...leftSorted, mid, ...rightSorted];
}


module.exports = {
    quickSort
};

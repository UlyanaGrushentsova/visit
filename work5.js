const getSortUniqueArr = (arr) => Array.from(new Set(arr)).sort()
console.log(getSortUniqueArr([1, 3, 1, 6, 3, 1, 3, 8, 5, 4, 4, 4, 1, 2]))
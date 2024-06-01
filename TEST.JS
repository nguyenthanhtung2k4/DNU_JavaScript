// Mảng ban đầu có chứa các giá trị trùng lặp
let arrayWithDuplicates = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 9, 10];

// Sử dụng Set để loại bỏ các giá trị trùng lặp và spread operator để chuyển đổi Set trở lại thành mảng
let uniqueArray = [...new Set(arrayWithDuplicates)];
let tung=[]
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

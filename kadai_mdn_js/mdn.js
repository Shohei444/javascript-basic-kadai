//定数を宣言
const today = new Date();

const y = today.getFullYear();
const m = today.getMonth() + 1;
const d = today.getDate();

//現在の日付を日本語形式で
console.log(y + "年" + m + "月" + d + "日");
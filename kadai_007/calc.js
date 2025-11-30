//変数numに0～30までのランダムな整数を代入する
let num = Math.floor(Math.random() * 30) + 1;

//変数numの値が3の倍数の場合、「3の倍数です」という文字列を出力する
if ((num % 3 === 0 ) && (num % 5 === 0 )) {
  console.log('3と5の倍数です');  
} else if (num % 3 === 0) {
  console.log('3の倍数です');
} else if  (num % 5 === 0) {
  console.log('5の倍数です');
} else {
  console.log(num);
}
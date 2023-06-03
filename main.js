'use strict';

for (let i = 1; i <= 50; i++) {
  console.log(i);  
  if (i % 10 == 0) {
    console.log('今' + '[' + i + ']' + '回ループしました。');
  }
  if (i % 4 == 0) {
    console.log('4で割れる数です。' + '[' + i + ']');
  }
  if (i === 50) {
    alert('50回カウントが終わりました。');
  }
}

// 色々試してみた過程
// ++は(1 を加算)して値を返す
/*
let count = 0;
let i = 1;

function division(num) {
  if(num % 4 === 0){
    count += 1;
    console.log('4で割れる数です。' + '[' + count + ']');
    } else {
    return num;
  }
}

// for文を使って繰り返す
for(let i = 1; i <= 50; i++) {
  console.log(division(i));
}

// while文を使って繰り返す
while(i <= 50) {
  console.log(division(i));
  i += 1;
}
*/


// 不合格_1回目のコード
/*
'use strict';

let count = 0;
let loop = 0;

// 問題1
for (let i = 1; i <= 50; i++) {
  if (i % 10 == 0) {
    loop += 1;
    console.log('今' + '[' + loop + ']' + '回ループしました。');
  }
  console.log(i);
}

// 問題2
for (let i = 1; i <= 200; i++) {
  console.log(i);
  if (i % 4 == 0) {
    count += 1;
    console.log('4で割れる数です。' + '[' + count + ']');
  }
  if (count === 50) {
    //alert('50回カウントが終わりました。');
    console.log('50回カウントが終わりました。');
  }
}
*/

// /**let,const等の変数宣言*/
// var val1 = "var変数";
// console.log(val1);

// /**var変数は上書き可能 */
// val1 = "var変数を上書き";
// console.log(val1);

// /**var変数は再宣言可能 */
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// /**let変数は上書き可能 */
// val2 = "let変数を上書き";
// console.log(val2);

// /**let変数は再宣言不可能 */
// let val2 = "let変数を再宣言";
// console.log(val2);

// const val3 = "const変数";
// console.log(val3);

// /**const変数は上書き・再宣言不可能 */
// val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

/**constで定義したオブジェクトはプロパティの変更可能 */
// const val4 = {
//   name: "aaa",
//   age: 28,
// };

// val4.name = "bbb"

// console.log(val4);

/**constで定義した配列はプロパティの変更可能 */
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**テンプレート文字列 */
// const name = "aaa";
// const age = 28;

//私の名前はaaaです。年齢は28歳です。

/**従来の方法 */
//const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
//console.log(message1);

/**テンプレート文字列を用いると */
//const message2 = `私の名前は${name}です。年齢は${age}です。`;
//console.log(message2);

/**アロー関数 */

/**従来の関数 */
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です。"));

/**アロー関数 */
// const func2 = (str) => str;
//  console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// }
// console.log(func3(10, 20));

/**分割代入 */

// const myProfile = {
//   name: "aaa",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const {name, age} = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['aaa', 28];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 =`名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**デフォルト値 引数など*/
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**スプレッド構文 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const agthrr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

/**map, filter */

const nameArr = ["田中", "山田", "aaa"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })

// console.log(nameArr2);

//nameArr.map((name) => console.log(name));

// const numArr= [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "aaa"){
//     return name
//   } else {
//     return `${name}さん`
//   }
// })

// console.log(newNameArr);

/**三項演算子 */

//ある条件？条件がtrue:false
// const val1 =  1 > 0 ? 'trueです' : 'falseです';
// console.log(val1)

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '100を超えています' : '許容範囲内です';
// }
// console.log(checkSum(50, 60));

/**論理演算子の本当の意味を知ろう */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || falg2) {
//   console.log("1か２はtrueになります");
// }

// if (flag1 && falg2) {
//   console.log("1も２もtrueになります");
// }

//||の左側がfalseとなるとき右側を返す。
// const num = null;
// const fee = num || "金額未設定です";

// //||の右側がtrueとなるとき左側を返す。
// const num2 = 100;
// const fee2 = num && "何か設定されました";
// console.log(fee2);


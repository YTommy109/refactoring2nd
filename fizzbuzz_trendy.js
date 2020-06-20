/**
 * 文法単語
 * アロー関数
 * テンプレートリテラル
 * ジェネレーター
 * スプレッド演算子
 */

/**
 * FizzBuzz ルール
 */
const fizz3     = v => !(v%3)?'Fizz':''
const buzz5     = v => !(v%5)?'Buzz':''
const fizzbuzz  = v => `${fizz3(v)+buzz5(v)}`||`${v}`

/**
 * FizzBuzz ジェネレーター
 */
function* genFizzBuzz(limit) {
  let start = 1
  do {
    yield fizzbuzz(start)
  } while (++start <= limit)
}

console.log([...genFizzBuzz(15)])


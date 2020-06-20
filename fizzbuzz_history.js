// 最初のコード
const fizzbuzz_ZERO = () => {
    return ['1', '2', 'Fizz', '4', 'Buzz']
}

// まずは変数に入れる
const fizzbuzz_1g = () => {
    const src = ['1', '2', 'Fizz', '4', 'Buzz']
    return src
}

// 初期化を代入に変更する
const fizzbuzz_2g = () => {
    const src = []
    src[1-1] = '1'
    src[2-1] = '2'
    src[3-1] = 'Fizz'
    src[4-1] = '4'
    src[5-1] = 'Buzz'
    return src
}

// ルールを導入する
const fizzbuzz_3g = () => {
    const src = []
    const handan = value => {
        if (value===3) return 'Fizz'
        if (value===5) return 'Buzz'
        return `${value}`
    }
    src[1-1] = handan(1)
    src[2-1] = handan(2)
    src[3-1] = handan(3)
    src[4-1] = handan(4)
    src[5-1] = handan(5)

    return src
}

// ループにする
const fizzbuzz_4g = () => {
    const handan = value => {
        if (value===3) return 'Fizz'
        if (value===5) return 'Buzz'
        return `${value}`
    }
    return [1,2,3,4,5].map(it=>handan(it))
}

// 最初のコード
const main = () => {
    return ['1', '2', 'Fizz', '4', 'Buzz']
}

// ルールを導入する

const main = () => {
    const fizzBuzz = (v) => {
        return `${v}`
    }

    return [
        fizzBuzz(1),
        fizzBuzz(2),
        'Fizz',
        fizzBuzz(4),
        'Buzz'
    ]
}

// ルールを追加する

const main = () => {
    const fizzBuzz = (v) => {
        if (v===3) return 'Fizz'
        if (v===5) return 'Buzz'
        return `${v}`
    }

    return [
        fizzBuzz(1),
        fizzBuzz(2),
        fizzBuzz(3),
        fizzBuzz(4),
        fizzBuzz(5)
    ]
}

// Array.map にする

const main = () => {
    const fizzBuzz = (v) => {
        if (v===3) return 'Fizz'
        if (v===5) return 'Buzz'
        return `${v}`
    }

    return [1,2,3,4,5].map(i => fizzBuzz(i))
}

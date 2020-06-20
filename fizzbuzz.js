const main = () => {
    const fizzBuzz = (v) => {
        if (v===3) return 'Fizz'
        if (v===5) return 'Buzz'
        return `${v}`
    }

    return [1,2,3,4,5].map(i => fizzBuzz(i))
}

export default main

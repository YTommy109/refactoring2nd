import main from './fizzbuzz'

describe('FizzBuzz について', () => {
    it('1-5までがFizzBuzzになること', () => {
        const ret = main()
        expect(ret[1-1]).toBe('1')
        expect(ret[2-1]).toBe('2')
        expect(ret[3-1]).toBe('Fizz')
        expect(ret[4-1]).toBe('4')
        expect(ret[5-1]).toBe('Buzz')
    })

    it('1-5までがFizzBuzzになること', () => {
        const exp = ['1', '2', 'Fizz', '4', 'Buzz']
        const target = main()

        expect(target).toEqual(exp)
    })
})

const expect = chai.expect

describe('#cardValue', function(){
    it('randomly generate a number between 1 and 13 and return it', function(){
        const x = cardValue()
        expect(x).to.equal(x > 0 && x < 14)
    })
})

// https://stackoverflow.com/questions/26704677/how-do-i-test-if-a-function-calls-a-specific-method-function
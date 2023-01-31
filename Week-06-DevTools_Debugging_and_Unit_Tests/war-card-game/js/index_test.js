const expect = chai.expect

describe('#cardValue', function(){
    it('should randomly generate a number between 1 and 13 and return it', function(){
        const x = cardValue()
        expect(Number.isInteger(x)).to.be.true
    })

it('should not accept any parameters', function(){
    expect(function(){
        cardValue(x)
    }).to.throw(Error);
})
})

// https://stackoverflow.com/questions/26704677/how-do-i-test-if-a-function-calls-a-specific-method-function
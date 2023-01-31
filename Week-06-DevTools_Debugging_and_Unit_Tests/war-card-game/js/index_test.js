const expect = chai.expect

describe('#cardValue', function(){
    it('should randomly generate a whole number between 1 and 13 and return it', function(){
        const x = cardValue()
        expect(Number.isInteger(x)).to.be.true
        expect(x > 0).to.be.true
        expect(x < 14).to.be.true
    })

it('should not accept any parameters', function(){
    expect(function(){
        cardValue(x)
    }).to.throw(Error);
})
})


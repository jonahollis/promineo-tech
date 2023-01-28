const expect = chai.expect

describe('#cardValue', function(){
    it('randomly generate a number between 1 and 13 and return it', function(){
        const x = cardValue()
        expect(x).to.equal(x > 0 && x < 14)
    })
})
const expect = chai.expect

describe('MyFunction', function(){
    describe('#doSomething', function(){
        it('should concatenate the two paramenters', function(){
            const x = doSomething('Hello', 5)
            expect(x).to.equal('Hello5')
        })
    })
})
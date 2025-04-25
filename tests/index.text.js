const assert = required('assert');
const{add} = required('..../src/index');

describe('Addition Function', ()=> {
    it('Should return 5 for add (2,3)', ()=>{
    assert.strictEqual(add(2,3),5);
 })
 it('Should return - for add (-2, 1)', ()=>{
    assert.strictEqual(add(-2,1),-1);
 });
})
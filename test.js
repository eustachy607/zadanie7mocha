const assert = require('chai').assert;

function add(a,b) {
    return a+b;
}

describe('Add', function() {
    it('powinno byc 4 jesli dodam 2 + 2', function() {
        assert.equal(add(2,2),4);
    });

    it('powinno byc 0 gdy dodamy -2 i 2', function(){
        assert.equal(add(-2, 2),0);
    });
});
// srednia
function srednia(arr) {
    const sum=arr.reduce((acc,num)=>acc+num,0);
    return sum / arr.length;
}
//mnozenie elementow tablicy
function mnozenie(arr) {
    return arr.reduce((acc,num)=>acc*num,1);
}

describe('srednia', function(){
    it('powinno zwrocic 3 kiedy dodamy 1,2,3,4,5', function(){
        assert.equal(srednia([1,2,3,4,5]),3);
    });

    it('powinno zwrocic 0 kiedy dodamy 0,0,0,0', function(){
        assert.equal(srednia([0,0,0,0]),0);
    });
});

describe('mnozenie',function(){
    it('powinno zwrocic 120 kiedy dodamy 1,2,3,4,5', function(){
        assert.equal(mnozenie([1,2,3,4,5]),120);
    });

    it('powinno zwrocic 0 kiedy dodamy 1,0,2,3,4', function(){
        assert.equal(mnozenie([1,0,2,3,4]),0);
    });
});
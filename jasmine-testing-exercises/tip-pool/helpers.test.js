describe ('helper functions test with setup and teardown', function(){

beforeEach(function(){
    billAmtInput.value = 10;
    tipAmtInput.value = 2;
    submitPaymentInfo();

});

it('should total tip amount of all payments on sumPaymentTotal()',function(){
    expect(sumPaymentTotal('tipAmt')).toEqual(2);
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
    expect(sumPaymentTotal('tipAmt')).toEqual(22);
})

it('should sum total bill amount on sumPaymentTotal()',function(){
    expect(sumPaymentTotal('billAmt')).toEqual(10);
    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();
    expect(sumPaymentTotal('billAmt')).toEqual(210);
});

it('should sum total tip percent on sumPaymentTotal()',function(){
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(40);
});

 it('should calculate percentage of tip on  calculateTipPercent()', function(){
     expect(calculateTipPercent(100, 25)).toEqual(25);
     expect(calculateTipPercent(200, 20)).toEqual(10);
 });
 

 it('should generate new table data from value and append to table row  on appendTd', function(){

    let newTr = document.createElement('tr');
     appendTd(newTr, 'temp');
     expect(newTr.children.length).toEqual(1);
     expect(newTr.firstChild.innerText).toEqual('temp');
 });

 it('should generate table data and append to table row on appendDeleteBtn()',function(){
     let newTr = document.createElement('tr');
    
    
     appendDeleteBtn(newTr);
     expect(newTr.children.length).toEqual(1);
     expect(newTr.firstChild.innerText).toEqual('X');

 });










afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerText = '';
    summaryTds[0].innerText = '';
    summaryTds[1].innerText = '';
    summaryTds[2].innerText = '';
    serverTbody.innerText = '';
    paymentId = 0;
    allPayments = {};
    });

})
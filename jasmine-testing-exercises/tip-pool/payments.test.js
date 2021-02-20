describe('Payments test with setup and teardown',function(){

beforeEach(function(){

billAmtInput.value = 10;
tipAmtInput.value = 2;

});

it('should add a new payment to the payment table on submitPaymentInfo()',function(){
submitPaymentInfo();
expect(Object.keys(allPayments).length).toEqual(1);
expect(allPayments['payment1'].billAmt).toEqual('10');
expect(allPayments['payment1'].tipAmt).toEqual('2');
expect(allPayments['payment1'].tipPercent).toEqual(20);

});


it('should create a new payment on createCurPayment()',function(){

 expect(createCurPayment()).toEqual({billAmt:'10',tipAmt:'2',tipPercent:20});


});

it('should update paymentTable on appendPaymentTable()',function(){

let payment = createCurPayment();
allPayments['payment1'] = payment;

appendPaymentTable(payment);

let tableDataList = document.querySelectorAll('#paymentTable tbody tr td');

expect(tableDataList.length).toEqual(3);
expect(tableDataList[0].innerText).toEqual('$10');
expect(tableDataList[1].innerText).toEqual('$2');
expect(tableDataList[2].innerText).toEqual('20%');

});

it('should not add a new payment on submitPaymentInfo with empty input', function (){

    billAmtInput.value = '';
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
});
 it('should not create payment with empty input on createCurPayment()',function(){
     billAmtInput.value ='';
     let currentPayment = createCurPayment();
     expect(currentPayment).toEqual(undefined);

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
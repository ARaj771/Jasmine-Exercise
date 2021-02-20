
it('should calculate the monthly rate correctly', function () {
 
expect(calculateMonthlyPayment({amount:100000, years: 30, rate:2.75})).toEqual("408.24")
expect(calculateMonthlyPayment({amount:500000, years: 30, rate:2.75})).toEqual("2041.21")
expect(calculateMonthlyPayment({amount:1000000, years: 30, rate:2.75})).toEqual("4082.41")
});


it("should return a result with 2 decimal places", function() {
  expect((234.456).toFixed(2)).toEqual('234.46');
  expect((123).toFixed(2)).toEqual('123.00');
  expect((1).toFixed(2)).toEqual('1.00');
   const values = {amount: 100000, years: 30, rate: 2.5};
   expect(calculateMonthlyPayment(values)).toEqual('395.12');

});

it('should calculate high rate interest',function(){
  const values = {amount: 100000, years: 30, rate: 100};

  expect(calculateMonthlyPayment(values)).toEqual('8333.33');
});

it('should get zero for amount = 0', function(){
const values = {amount: 0, years: 30, rate: 100};

expect(calculateMonthlyPayment(values)).toEqual('0.00');
});
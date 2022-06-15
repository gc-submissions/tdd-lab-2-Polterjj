const {calculateChange, isSufficientPayment, calculateTotal, addItem} = require('../src/js/cart-functions.js')

describe('calculateChange', () => {
  test ("When payment is 5 and total is 6 then change will be 1", () => {

    const total = 5;
    const payment = 6;


    const change = calculateChange(payment, total);

    expect(change).toEqual(1);
  }
)});

  test ("When payment is 13.03 and total is 12.3 then change will be .73", () => {

    const total = 12.3;
    const payment = 13.03;


    const change = calculateChange(payment, total);

    expect(change).toBeCloseTo(.73);
  }
)

  test ("When payment is 25 and total is 20 then change will be 5", () => {

    const total = 20;
    const payment = 25;


    const change = calculateChange(payment, total);

    expect(change).toBe(5);
  }
)


describe("calculateChange", () => {
  test("when payment is 5 and total is 6 expect isSufficientPayment to return true",() => {
    // Arrange
    const total = 5;
    const payment = 6;
  
    // Act
    const isSufficient = isSufficientPayment(payment, total);
  
    //Assert
    expect(isSufficient).toBe(true);
  })
});

describe("isSufficientPayment", () => {
  test.todo("add isSufficientPayment tests here");
});

describe("calculateTotal", () => {
  test ('calculates the total with one item', () => {
  //Arrange 
  const items = [{name: "ball", price: 4.99}];

  //Act 
  const total = calculateTotal(items);

  // Assert
  expect(total).toEqual(4.99);
  })

  test ('calculates the total with three items', () => {
  //Arrange 
  const items = [
  {name: "ball", price: 4.99},
  {name: "ball", price: 4.99},
  {name: "ball", price: 4.99},

  //Act 
  const total = calculateTotal(items);

  // Assert
  expect(total).toBeCloseTo(16.52);
  })

  test ('calculates the total and expect it to be 0', () => {
  //Arrange 
  const items = [];

  //Act 
  const total = calculateTotal(items);

  // Assert
  expect(total).toBe(0);
  })
});

test ('calculates the total with three items', () => {
  //Arrange 
  const items = [
  {name: "ball", price: 10}, 
  {name: "ball", price: 12},
  {name: "ball", price: 20},
  {name: "ball", price: 10},

  //Act 
  const total = calculateTotal(items);

  // Assert
  expect(total).toBe(52);
  })
  
describe("addItem", () => {
  test ('', () => {

    //Arrange 
    const itemsArray = []
    addItem(itemsArray, "beans", 3);

    //Assert
    expect(itemsArray).toContain("beans", 3);
  }
);

describe("removeItem", () => {
  test("remove items at given index") () => {

  }
})})
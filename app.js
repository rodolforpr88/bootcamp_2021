function getCard(params) {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['clubs', 'hearts', 'spades', 'diamond'];
  sortedValue = Math.round((Math.random()) * values.length) - 1;
  sortedSuit = Math.round((Math.random()) * suits.length) - 1;
  let result = {
    value: values[sortedValue],
    suit: suits[sortedSuit]
  };
  return result;
}
// solution created the function 'pick' separeted
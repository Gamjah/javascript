// @ts-check

/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  let cardCount = 0;
  stack.forEach((cards) => {card === cards ? cardCount++ : null;});
  return cardCount;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  let cardCountEven = 0;
  let cardCountOdd = 0;
  if (type === true){
    for (const card of stack){
      if (card % 2 === 0){
        cardCountEven++;
      }
    }
    return cardCountEven;
  }
  if (type === false){
    for (const cards of stack){
      if (type === false){
        if (cards % 2 !== 0){
          cardCountOdd++
        }
      }
    }
    return cardCountOdd;
  }
}

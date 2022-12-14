// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */

/**
 * `'Pure Strawberry Joy'` takes 0.5 minutes, `'Energizer'` and `'Green Garden'` take 1.5 minutes each, `'Tropical Island'` takes 3 minutes and `'All or Nothing'` takes 5 minutes.
For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return .5;
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      break;
    case 'Tropical Island':
        return 3;
        break;
    case 'All or Nothing':
        return 5;
        break;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
 export function limesToCut(wedgesNeeded, limes) {
  let limesN=0;
  if(wedgesNeeded > 0){
    for(let i=0; i< limes.length; i++){
      switch(limes[i]){
        case 'small':
          wedgesNeeded-=6;
          limesN++;
          break;
        case 'medium':
          wedgesNeeded-=8;
          limesN++;
          break;
        case 'large':
          wedgesNeeded-=10;
          limesN++;
          break;}
      if(wedgesNeeded <=0){break;}}
  }else{return 0;}

  return limesN;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
 
  while(timeLeft > 0){
    timeLeft -= timeToMixJuice(orders[0]);
    orders.shift();
  }
  return orders;
}

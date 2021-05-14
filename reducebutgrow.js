// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:



function grow(x) {
    const reducer = (accumulator, currentValue) => accumulator * currentValue;
    return (x.reduce(reducer))
  }
  
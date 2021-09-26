import React from 'react'

const split = (expression, operator) => {
  const result = [];
  let braces = 0;
  let currentChunk = "";
  for (let i = 0; i < expression.length; ++i) {
    const curCh = expression[i];
    if (curCh == '(') {
      braces++;
    } else if (curCh == ')') {
      braces--;
    }
    if (braces == 0 && operator == curCh) {
      result.push(currentChunk);
      currentChunk = "";
    } else currentChunk += curCh;
  }
  if (currentChunk != "") {
    result.push(currentChunk);
  }
  return result;
};

// this will only take strings containing * operator [ no + ]
const parseMultiplicationSeparatedExpression = (expression) => {
  console.log(expression)
  const numbersString = split(expression, '*');
  const numbers = numbersString.map(noStr => {
    if (noStr[0] == '(') {
      const expr = noStr.substr(1, noStr.length - 2);
      // recursive call to the main function
      return parsePlusSeparatedExpression(expr);
    }else if(noStr.includes('/')){
      return parseDiviseSeparatedExpression(noStr)
    }
    return +noStr;
  });

  const initialValue = 1.0;
  const result = numbers.reduce((acc, no) => acc * no, initialValue);
  return result;
};


// only /
const parseDiviseSeparatedExpression = (expression) => {
  const numbersString = split(expression, '/');
  const numbers = numbersString.map(noStr => parseMultiplicationSeparatedExpression(noStr));
  const initialValue = numbers[0];
  const result = numbers.slice(1).reduce((acc, no) => acc / no, initialValue);
  return result;
};

// both * -
const parseMinusSeparatedExpression = (expression) => {
  const numbersString = split(expression, '-');
  const numbers = numbersString.map(noStr => parseMultiplicationSeparatedExpression(noStr));
  const initialValue = numbers[0];
  const result = numbers.slice(1).reduce((acc, no) => acc - no, initialValue);
  return result;
};

// * - + 
const parsePlusSeparatedExpression = (expression) => {
  const numbersString = split(expression, '+');
  const numbers = numbersString.map(noStr => parseMinusSeparatedExpression(noStr));
  const initialValue = 0.0;
  const result = numbers.reduce((acc, no) => acc + no, initialValue);
  return result;
};

const Parse = ({expression}) => {

  const search = ',';
  const replaceWith = '.';
  const res = expression.split(search).join(replaceWith);
  const result = parsePlusSeparatedExpression(res, '+');

  return (
    <>
    <div className="flex m-4">
      <p >{expression} is equal to : {result}</p>
    </div>
    </>
  )
};

export default Parse;
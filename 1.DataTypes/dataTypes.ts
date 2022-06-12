function sum(a: number, b: number, showRes: boolean, phrase: string) {
  const res = a + b;
  if (showRes) console.log(phrase + res);
  else return a + b;
}

const num1 = 5;
const num3: Number = 45;
// we can also do like this
const num2 = 10;
const showRes = true;
const resultPhrase = "Result is : ";
const ans = sum(num1, num2, showRes, resultPhrase);

// typescript help in the development mode

/**
       * Argument of type 'string' is not assignable to parameter of type 'number'.
      
      8 const ans = sum(num1, num2);
       */

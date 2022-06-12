// function types
function sum(a: number, b: number): number {
        return a + b;
      }
      function printRes(a: number): void {
        console.log("result is " + a);
      }
      let ans = printRes(sum(3, 5));
      
      // let combineValues:Function;
      let combineValues:(a:number,b:number)=>number;
      combineValues=sum;
      console.log(combineValues(8,8));
      
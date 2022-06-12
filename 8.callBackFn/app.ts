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
      
      
      // now it is time for callback fn
      function addHandle(n1:number, n2:number, cb:(num:number)=>void){
        const result = n1+n2;
        cb(result)
      }
      
      // 30
      addHandle(10,20,(result)=>{console.log(result);
      })
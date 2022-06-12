// literal Types
function combine(
        input1: number | string,
        input2: number | string,
        resultConversion: "as-number" | "as-text" 
        //this union types is literal types union
      ) {
              let res;
              if(typeof input1==='number' && typeof input2==='number' ||resultConversion==="as-number"){
                      res=+input1+ +input2;
              }else{
                      res=input1.toString()+input2.toString();
              }
              return res;
      }
      const combinedAges = combine(30, 26, "as-number");
      console.log(combinedAges);
      const combinedStringAges = combine("30", "26", "as-number");
      console.log(combinedStringAges);
      const combinedNames = combine("JOHN", "DOE", "as-text");
      console.log(combinedNames);
      
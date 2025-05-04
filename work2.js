function calculate(a,b,operation){
    if (operation==="+") {return a+b;}
    else if(operation==="-") {return a-b;}
    else if(operation==="*") {return a*b;}
    else if(operation==="/") {return a/b;}
  };
  console.log(calculate.apply(null, [2, 3, "+"]))
  
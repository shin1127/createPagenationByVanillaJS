
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const perPage = 2;
const getPage = (p) => {
  
  document.write(data[2*p - 2]);
  document.write(" ");
  document.write(data[2*p - 1]);
  document.write(" ");
  };
  
  
  // think

getPage(1); //[1,2]
getPage(2); //[3,4]
getPage(5); //[9,10]

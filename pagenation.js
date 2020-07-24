const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const perPage = 2;
const getPage = (p) => {
  
  console.log(data[2*p - 2]);
  console.log(data[2*p - 1]);
  
  hoge = []
  
  // ここ拡張for文にできるね？
  hoge.push(data[2*p - 2]);
  hoge.push(data[2*p - 1]);
  
  return hoge;
  
  };
  
  
  // think

getPage(1); //[1,2]
getPage(2); //[3,4]
getPage(5); //[9,10]

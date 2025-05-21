// const fun2 = ()=>{
//     console.log("Fun 2 start and ends");
// };
// const fun1 =()=>{
//     console.log("Fun 1 is start");
//     fun2();
//     console.log("fun1 ends");
// };
// fun1();

const fun2 = () => {
  setTimeout(() => {
    console.log("fun2 starts and ends");
  }, 1000);
};

const fun1 = () => {
  console.log("fun 1 is start");
  fun2();
  console.log("fun 1 ends");
};
fun1();

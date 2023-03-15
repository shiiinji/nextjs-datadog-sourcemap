export const fn = (x: number, y: number) => {
  window.setTimeout(function(){
    throw new Error("err8.8");
  }, 5000);

  return x * y
}
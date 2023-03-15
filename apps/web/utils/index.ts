export const fn = (x: number, y: number) => {
  window.setTimeout(function(){
    throw new Error("err9.12");
  }, 5000);

  return x * y
}
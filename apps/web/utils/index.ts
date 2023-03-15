export const fn = (x: number, y: number) => {
  window.setTimeout(function(){
    throw new Error("err9.11");
  }, 5000);

  return x * y
}
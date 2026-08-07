function resusive(max){
  console.log(max);
  if (max >= 10) return;
  //max ++; <- pode ser assim ou adiconar no parametro
  resusive(max + 1);
}
resusive(0);

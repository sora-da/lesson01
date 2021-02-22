const d = process.argv[2];
if(d >= 24){
  console.log(`${d - 24}時`);
}else{
  console.log(`${d}時`);
}

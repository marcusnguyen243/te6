let checker;


for (let y =0; y<8; y++){
  for (let x =0; x <8; x++){
    if ((x + y) % 2 == 0){
      checker+= " ";
    } else {
      checker +="#";
      }
    }
    checker+="\n";
  }

console.log(checker);

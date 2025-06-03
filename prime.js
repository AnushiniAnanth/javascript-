var x = 7;
 var flag = 1;
 if( x == 0 || x == 1){
      console.log(" Neither a prime nor a composite number")
 }
  for( var i=2;i< x;i++){
     if( x%i == 0){
         flag =0;
     }
  }
   if( flag ==0 ){
     console.log(" Not a prime number")
   }
   else{
    console.log(" prime number")
   }
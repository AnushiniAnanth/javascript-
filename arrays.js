var arr = [2,5432, 5,25, "anu"]
 var ar = new Array(3);

  var ar3 = [];
   console.log( arr[4]);

   //push
   arr.push(25);
    console.log(arr)

    //pop
    arr.pop();
    console.log(arr)


    arr.shift() // remove first element 
    console.log( arr)


    arr.unshift('ammu') // add first element 
    console.log( arr)

   //new array to splice
    var Animal =["dog", "cat", " monkey"];
     Animal.splice(1,2,"hen", 2, 58695, 789897534, 3)  // add the element in specific index
     console.log( Animal)

     // slice method 
     let ar4= Animal.slice(1,4);
     console.log( Animal.slice(1,5))

     //sort the array

     let ar6 =[2,7,1,6,0]
     console.log( ar6.sort())
     console.log( ar6.sort( (a,b) => a-b))

     // spread operator 
      let ar7 = [2,12,ar6]
        console.log( ar7)  //[ 2, 12, [ 0, 1, 2, 6, 7 ] ]

        ar8 =[12,32,...Animal];
        
        console.log(ar8)  //[ 12, 32, 2, 12, [ 0, 1, 2, 6, 7 ] ]
        
         // destruction array
         let ar9= [3,4577,908, 78,9]
          const[a,b,c,d,e,f] =ar9;

          console.log(a)
          console.log(b)
          console.log(c)

          // function to print the value of a arrray in reverse order 
           var ar = [3,21, 31,78]
           /* const rev = ar.reverse();
             console.log(rev)

             //(or)

             for( let i= ar.length-1; i>=0;i--){
                 console.log( ar[i])

             }
             */
              
              let max= ar[0];
              let min = ar[0];
              for( let  i=0;i< ar.length;i++){
                 if( max > ar[0]){
                     max= ar[0]
                 }if(min < ar[0]){
                     min = ar[0]
                 }
              } 
              console.log( min)
              console.log(max)


              arr=[45,25,65,95,75,36]
a=arr.sort((a,b)=>a-b)
console.log("Min= "+a[0])
console.log("Max= "+a[5])








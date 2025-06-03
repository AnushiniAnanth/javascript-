let dateNow = new Date();
 console.log( dateNow); 

  let date = new Date( "2024-08-03")
  console.log( date)

   // try printing your DOB 
   console.log( dateNow .toDateString())
   console.log( date.toDateString())

   console.log( dateNow .toISOString())
   console.log( dateNow .toUTCString())
   console.log( dateNow .toLocaleString())
   console.log( dateNow .toLocaleDateString())
   console.log( dateNow .toLocaleTimeString())


   //extract date info one by one
   dateNow = new Date ("2024-08-03")
    console.log( dateNow .getFullYear())
    console.log( dateNow .getMonth());
    console.log( dateNow .getDay());
    console.log( dateNow .getTime())
    console.log( dateNow .getHours())
    console.log( dateNow .getMinutes) 


    //set methods
    dateNow.setFullYear(2030);
    dateNow.setMonth(10);
    dateNow.setDate(3);
    dateNow.setHours(9);
    dateNow.setMinutes(44);
    console.log( dateNow.toLocaleDateString()); 


    // to calc diff bet dates

    let now =new Date();
    let diff = dateNow-now;
    let days= Math.ceil( diff/(1000 *60*60*24))
    console.log( days);

    // to calc all yearssince js
    let years = Math.ceil( now /(100*60*60*24*365));
    console.log(years);


    /*// write a program to cal your age 
    let birthDate =" 2004-08-03";
    let birthDay = new Date( birthDate);
     let today= new Date();
    let dif= today - birthDay;
     let age = new Date( dif);
      console.log( "My age is" + age)*/


      console.log( "My age is 20")







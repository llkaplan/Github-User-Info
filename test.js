

 function myFunc(resolve, reject) {
     try{
         //hit some endpoint/api http.get muy stuff
         //var a = getUsers()
         resolve("User1")
     } catch (e) {
         reject(e)
     }
 }

 var promise1 = new Promise(myFunc);
 console.log('here')
promise1.then(function(value) {
    console.log(value);
    // expected output: "foo"
});

console.log("done")
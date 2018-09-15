// motivation:
// now we wrap callbacks inside callbacks when we need 
// async tasks to be executed one by one
// problem: unreadable, error-prone (callback hell)

myFirstAsyncTask(data, function(data){
    mySecondAsyncTask(data, function(data){
        myThirdAsyncTask(data, function(data){
            myFourthAsyncTask(data, function(data){
                doSomethingWith(data);
            })
        })
    })
})

// jQuery's attempt to solve callback hell:
// JQuery Deferred Object example

$.get("https://randomuser.me/api").then(function (data) {
    console.log(data);
    return 'returned by 1st .then()'; //pass value to next .then()
}).then(function (data) {
    console.log(data);
    return $.get("https://randomuser.me/api?results=2")// pass another deferred object
}).then(function (data) { // this function only get triggered when previous deferred object resolves
    console.log(data);
    var def1 = $.Deferred(); //creating deferred object
    def1.resolve('data resolved by deferred object');
    return def1;
}).then(function (data) {
    console.log(data);
    return $.get("https://randomuser.me/api?results=1")
}).then(console.log);

// Example: Creating a deferred object to wrap an async function

function myDeferred(){
    var a = $.Deferred();
    setTimeout(function(){
        if(Math.random()<0.2){
            return a.reject('Error occur');
        } else
            a.resolve('This is data returned from asynchronous function');
    },4000)
    return a;
}

myDeferred().done(function(data){
    console.log(data);
}).fail(function(err){
    console.log(err);
})
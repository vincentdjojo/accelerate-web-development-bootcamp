function whoIsInSpace(cb){
    var http = new XMLHttpRequest();

    http.open('GET','http://api.open-notify.org/astros.json');

    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            // Return the Data by calling callback with the resulting data 
            var data = JSON.parse(http.responseText);
            var names = data.people.map(function(person){
                return person.name;
            })
            cb(names);
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
}

whoIsInSpace(console.log);

// http://api.open-notify.org/astros.json
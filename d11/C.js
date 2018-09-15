$(()=>{
    function informMe(endpoint, value){
        return $.get(`https://restcountries.eu/rest/v2/${endpoint}/${value}`);
    }
    informMe("capital","berlin")
    .done((data)=>{
        console.log("Capital data is fetched");
        console.log(data);
    })
    .then(()=>{
        console.log("The first then block");
    })
    .then(()=>{
        console.log("The second then block");
        throw Error("The code is failed here");
    })
    .then(()=>{
        console.log("The third then block");
    })
    .fail((err)=>{
        console.log('error occurred ' + err);
    });

    informMe("currency","hkd")
    .done((data)=>{
        console.log("Currency data is fetched");
        console.log(data);
    }).fail((err)=>{
        console.log("error occurred "+err)
    });
});
$(()=>{
    function informMe(endpoint, value, callback){
        $.ajax({
            method:"get",
            url:`https://restcountries.eu/rest/v2/${endpoint}/${value}`,

        }).done((data)=>{
            callback(data)
        }).fail((err)=>{
            console.log('error occurred' + err);
        });
    }
    informMe("capital","berlin",function(data){
        console.log(data);
    })
});
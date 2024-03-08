var ul = document.getElementById('main');
var display = 0;

function showSidebar(){
    if(display == 1){
        ul.style.display = 'block';
        display = 0;
    }
    else{
        ul.style.display = 'none';
        display = 1;
    }
}

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'",
    // "url": "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response){
    console.log(response);
});
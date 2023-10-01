function addZero(i) {               
    if (i < 10) {
      i = "0" + i;
    }
    return i;
}

var getTime = (function () {
    var obj = {
        'beijing': [8, 0],
        'cairo': [2, 0],        
        'chicago': [-6, 0],
        'dubai': [4, 0],
        'haNoi': [7, 0],
        'hongKong': [8, 0],
        'istanbul': [3, 0],
        'lagos': [1, 0],
        'london': [0, 0],
        'losAngeles': [-8, 0],
        'moscow': [3, 0],
        'mumbai': [5, 30],
        'newYork': [-5, 0],
        'paris': [1, 0],
        'saoPaolo': [-3, 0],
        'seoul': [9, 0],
        'shanghai': [8, 0],
        'singapore': [8, 0],
        'sydney': [11, 0],
        'tokyo': [9, 0],
        'toronto': [-5, 0],
        'zurich': [1, 0],
    }
    return function (key) {
        var city = obj[key];
        return city;
    }
})();

function setUTC() {
    try {
        var city = document.getElementById("selectUTC").value;
        var date = new Date();
        var utcTime = getTime(city);
    }
    catch(err) {
        return 
    }

    date.setHours(date.getUTCHours() + utcTime[0]);
    date.setMinutes(date.getUTCMinutes() + utcTime[1]);
    date.setSeconds(date.getUTCSeconds());

    var hour = addZero(date.getHours());
    var min = addZero(date.getMinutes());
    var sec  = addZero(date.getSeconds());
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    //document.getElementById("time").innerHTML = hour + ':' + min + ':' + sec;
    document.getElementById("hr").innerHTML = hour;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
    document.getElementById("fullDate").innerHTML = days[date.getDay()] + ', ' + month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();

}

function darkMode() {
    console.log('dark mode worked')
    var element = document.getElementById("container");
    element.classList.toggle('dark-mode');
    var element = document.getElementById("footer");
    element.classList.toggle('dark-mode');
    var element = document.body;
    element.classList.toggle('dark-mode');
    var element = document.getElementById("header");
    element.classList.toggle('dark-mode');
}

setInterval(setUTC, 1000);

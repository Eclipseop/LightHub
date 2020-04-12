const BOX_SHADOW = "rgb(136, 136, 136) 0px 0px 30px 10px"
const NO_SHADOW = "rgb(0, 0, 0) 0px 0px 0px"

document.addEventListener("DOMContentLoaded", () => {
    loadWeather()
    loadLights()
});

function loadLights() {
    axios.get('/lightState')
        .then((res) => {
            var data = JSON.parse(JSON.stringify(res.data)); //js btw xddd
            console.log(data);
            for (let entry in data) {
                var key = entry;
                var value = data[key];
                if (value == true) {
                    document.getElementById(key).style.boxShadow = BOX_SHADOW;
                } else {
                    document.getElementById(key).style.boxShadow = NO_SHADOW;
                }
            }
        })
}

function loadWeather() {
    const temp = document.getElementsByClassName("temp")[0];
    const skytext = document.getElementsByClassName("skytext")[0];
    axios.get('/weather')
        .then((res) => {
            temp.innerHTML = res.data + "°";
        })
        .catch((err) => {
            console.err(err);
        });
    axios.get('/skytext')
        .then((res) => {
            skytext.innerHTML = res.data;
        })
        .catch((err) => {
            console.err(err);
        });
}

setInterval(() => {
    console.log('Load light info')
    loadLights()
}, 1000)

setInterval(() => {
    console.log('Load weather info')
    loadWeather()
}, 300000)

setInterval(() => {
    var time = new Date();
    var hour = time.getHours();
    var am = "am";
    if (hour > 12) {
        hour -= 12;
        am = "pm";
    }
    var min = time.getMinutes();
    document.getElementsByClassName("time")[0].innerHTML = hour + ':' + (min < 10 ? "0" + min : min) + am;
}, 1000)

function get(param) {
    axios.get('/' + param)
        .then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
}

function toggleSpecific(lightId) {
    axios.get('/toggle?id=' + lightId)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.err(err)
        })
}
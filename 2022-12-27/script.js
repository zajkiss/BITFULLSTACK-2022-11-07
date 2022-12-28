let hour = document.getElementById("time_hour");
let min = document.getElementById("time_min");
let sec = document.getElementById("time_sec");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");

let _hour = 0;
let _min = 0;
let _sec =  0;
let runing = false;
let timer;

start.addEventListener("click", fStart);
reset.addEventListener("click", fReset);
pause.addEventListener("click", fPause);

function fStart() {
    if (!runing) {
        runing = true;
        timer = setInterval(() => {
            _sec += 1;
            if (_sec === 60){
                _sec = 0;
                _min += 1;
            };
            if (_min === 60) {
                _min = 0;
                _hour += 1;
            };
            if (_hour === 24) {
                _hour = 0;
            };
            if(_sec<10){
               sec.innerText ="0"+ _sec;
            }else{
                sec.innerText = _sec;
            }
    
            if(_min<10){
                min.innerText ="0"+ _min;
             }else{
                 min.innerText = _min;
             }
             if(_hour<10){
                hour.innerText ="0"+ _hour;
             }else{
                 hour.innerText = _hour;
             }
        console.log(_sec)
        }, 1000);
    };
};
function fReset() {
    runing = false;
    clearInterval(timer);
    _hour = 0;
    _min = 0;
    _sec = 0;
    hour.innerText = _hour;
    min.innerText = _min;
    sec.innerText = _sec;
};
function fPause() {
    runing = false;
    clearInterval(timer);
};

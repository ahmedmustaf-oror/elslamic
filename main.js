function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let secs = now.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  secs = secs < 10 ? '0' + secs : secs;

  const timeString = hours + ':' + minutes + ':' + secs;
  document.getElementById('clock').innerText = timeString;
  document.getElementById('h3').innerText = `${timeString} :الوقت الان`;
}
updateClock()
setInterval(updateClock, 1000);
function gettime(){
    let city = document.getElementById("city").value;
    let url = `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=Egypt&method=5`;
    fetch(url)
    .then(res => res.json())
    .then(data => {
        let t = data.data.timings;
        let d = data.data.date.readable;
        document.getElementById("date").innerText = "📅 "+ d;
        document.getElementById("times").innerHTML = `
        <div class="pra"><span>${t.Fajr}</span><span>الفجر</span></div>
        <div class="pra"><span>${t.Sunrise}</span><span>الشروق</span></div>
        <div class="pra"><span>${t.Dhuhr}</span><span>الظهر</span></div>
        <div class="pra"><span>${t.Asr}</span><span>العصر</span></div>
        <div class="pra"><span>${t.Maghrib}</span><span>المغرب</span></div>
        <div class="pra"><span>${t.Isha}</span><span>العشاء</span></div>
        `;
        
    })
    .catch(() => {
        alert("حدث خطا في جلب البيانات او ربما انت غير متصل بالانترنت")
    });
}
gettime();
window.onload = function(){
    document.getElementById("tn").style.display = 'none';
    document.getElementById("tp").style.display = 'none';
}
function getpage(){
  let pageinput = document.getElementById("page").value;
  let img = document.getElementById("img");
  let tn = document.getElementById("tn");
  let tp = document.getElementById("tp");
  
  if(pageinput === ""){
    alert("يرجي ادخال رقم بين (1-604)");
    
    return;
  }
  let page = Number(pageinput);
  if(page > 604){
    alert("يرجي ادخال رقم بين (1-604)");
    
    return;
  }
  img.src = `https://quran.ksu.edu.sa/png_big/${page}.png`;
  document.getElementById('h4').innerText = `رقم الصفحة: ${page}`
  tn.style.display = 'flex';
  tp.style.display = 'flex';
}
function thenext(){
  let img = document.getElementById("img");
  let page = document.getElementById("page").value;
  let paget = Number(page);
  if(page >= 604){
    alert("لا توجد صفحه بعد 604");
    return;
  }
  let pagee = paget + 1;
  img.src = `https://quran.ksu.edu.sa/png_big/${pagee}.png`;
  document.getElementById('h4').innerText = `رقم الصفحة: ${pagee}`;
  document.getElementById("page").value = pagee;
}
function theprevious(){
  let img = document.getElementById("img");
  let page = document.getElementById("page").value;
  let paget = Number(page);
  if(page <= 1){
    alert("لا توجد صفحه قبل 1");
    return;
  }
  let pagee = paget - 1;
  img.src = `https://quran.ksu.edu.sa/png_big/${pagee}.png`;
  document.getElementById('h4').innerText = `رقم الصفحة: ${pagee}`;
  document.getElementById("page").value = pagee;
}

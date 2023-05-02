let isim = prompt("Lütfen İsminizi Yazınız").toUpperCase();
while (isim == "") {
    alert("İsminizi Yazmadınız!!!!");
    isim = prompt("Lütfen İsminizi Yazınız").toUpperCase();
}
if (isim != "") {
    isimDom = document.getElementById('myName');
    isimDom.innerHTML = isim;
    showTime();
    function showTime() {
        let tarihDom = document.querySelector('#myClock');
        let tarih = new Date();
        let saat = tarih.getHours();
        let dakika = tarih.getMinutes();
        let saniye = tarih.getSeconds();
        let gun = tarih.getDay();
        let gunler =["Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
        let zaman = `${saat}:${dakika}:${saniye}  ${gunler[gun-1]}`;
        tarihDom.innerHTML = zaman;
        setTimeout(showTime, 1000);
    }
}
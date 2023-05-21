Date()
let Ucapan = new Date()
var h=(new Date()).getHours();
var m=(new Date()).getMinutes();
var s=(new Date()).getSeconds();
if (h >= 4 && h < 10) document.writeln("Halo, Selamat Pagi Richi");
if (h >= 10 && h < 15) document.writeln("Halo, Selamat Siang Richi ");
if (h >= 15 && h < 18) document.writeln("Halo, Selamat Sore Richi");
if (h >= 18 || h < 4) document.writeln("Halo, Selamat Malam Richi");
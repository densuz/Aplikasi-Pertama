
var nilai_ujian = document.getElementById("nilai_ujian");
var nilai_tulis1 = document.getElementById("nilai_tulis1");
var nilai_tulis2 = document.getElementById("nilai_tulis2");
var nilai_praktek = document.getElementById("nilai_praktek");
var nilai_ujianTulis = document.getElementById("nilai_ujianTulis");

var tulis1 = prompt("Masukkan Nilai Ujian Tertulis Pertama");
var tulis2 = prompt("Masukkan Nilai Ujian Tertulis Kedua");
var praktek = prompt("Masukkan Nilai Ujian Praktek");
var hasil_ujian = (parseInt(tulis1) + parseInt(tulis2) + parseInt(praktek))/3;
var ujian_tulis = (parseInt(tulis1) + parseInt(tulis2))

nilai_ujianTulis.innerHTML = + ujian_tulis;
nilai_praktek.innerHTML = + praktek;
nilai_ujian.innerHTML = + hasil_ujian;

//Toefl//

var nilai_toefl= document.getElementById("nilai_toefl");
var score_toefl= document.getElementById("score_toefl");
var toefl =prompt("Masukkan Score Toefl");
var toefl1 = (parseInt(toefl));
score_toefl.innerHTML = + toefl1;

if( parseInt(toefl) >= 500){
 nilai_toefl.innerHTML = "100";
}
else if(parseInt(toefl) >= 450){
  nilai_toefl.innerHTML = "85";
}
else if(parseInt(toefl) < 450){
  nilai_toefl.innerHTML = "50";
}
else if(parseInt(toefl) < 50){
    nilai_toefl.innerHTML = "Anda tidak Lulus Toefl";
  }




//BEASISWA

var nilai_beasiswa= document.getElementById("nilai_beasiswa");
var nilai_toefl=nilai_toefl.innerHTML;
var score_beasiswa = ( parseInt(hasil_ujian) + parseInt(nilai_toefl))/2;
nilai_beasiswa.innerHTML = + score_beasiswa;

var status_beasiswa= document.getElementById("status_beasiswa");

var nilai= + score_beasiswa;
if(nilai >= 90){
 status_beasiswa.innerHTML = "LULUS";
}
else if(nilai < 90){
    status_beasiswa.innerHTML = "TIDAK LULUS";
}


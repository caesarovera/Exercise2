var tampil = document.formNomor.isiText;
function ins(num) {
 tampil.value += num;
}
function samaDengan() {
 tampil.value = eval(tampil.value);
}
function backspace() {
 tampil.value = tampil.value.substr(0,tampil.value.length-1);
}
function hapusSemua() {
 tampil.value = "";
}
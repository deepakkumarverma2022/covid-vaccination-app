v = 2199198635;
v2 = 15134;
setInterval(function () {
  document.getElementById('s1').innerHTML = v += 9
}, 100000);
setInterval(function () {
  document.getElementById('s2').innerHTML = v2++
}, 300000);

const toggleDtoC = () => {
    document.getElementById("pin").classList.add('btn-active');
    document.getElementById("form1").classList.add('d-none');
    document.getElementById("district").classList.remove('btn-active');
    document.getElementById("form2").classList.remove('d-none');
}
const toggleCtoD = () => {
    document.getElementById("pin").classList.remove('btn-active');
    document.getElementById("form1").classList.remove('d-none');
    document.getElementById("district").classList.add('btn-active');
    document.getElementById("form2").classList.add('d-none');
    document.getElementById("sec4-child").classList.add('d-none');
}
const showCenter = () => {
  if(document.getElementById("pin-input").value == '812001') {
    document.getElementById("sec4-child").classList.remove('d-none');
  }
  else {
    alert("Try Another PIN")
  }
}
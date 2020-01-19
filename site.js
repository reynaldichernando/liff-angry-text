
$('#btn_send').hide();

let txt_input = document.getElementById('txt_input');
let txt_output = document.getElementById('txt_output');
txt_input.addEventListener('keyup', function(event){
    txt_output.innerHTML = (txt_input.value).toUpperCase();
});

let btn_send = document.getElementById('btn_send');
btn_send.addEventListener('click', function(event){
    sendMessage(txt_output.textContent);
});
initializeLiff();
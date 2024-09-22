let qrinput = document.getElementById("qrinput");
let qrImage = document.getElementById("qrImage");



function qrgenerator(){

    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrinput.value;

}
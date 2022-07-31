var canvas;
var context;
var coloreSelezionato;
var LarghezzaLinea = 2;
var puntoInizioDisegnoX = null;
var PuntoInizioDisegnoY = null;
var posizioneCorrenteMouseX = null;
var posizioneCorrenteMouseY = null;
var mouseIsDown = false;

document.addEventListener(
    'DOMContentLoaded',
    function () {
        console.log('DOMContentLoaded')  ;
        canvas = document.getElementById('areaDiDisegno');
        context = canvas.getContext('2d');

        var controlsHeight = document.getElementById('controls').offsetHeight;
        canvas.width = window.innerWidth;
        canvas.heigth = window.innerHeight - controlsHeight - 20;

        [].forEach.call(
            document.querySelectorAll('.bottone'),
            function (el) {
                console.log(el);
                el.addEventListener(
                    'click',
                    function () {
                        var id = this.id;
                    }
                )
            }
        )
    }
);
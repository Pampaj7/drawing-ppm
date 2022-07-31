var canvas;
var context;
var coloreSelezionato;
var LarghezzaLinea = 2;
var puntoInizioDisegnoX = null;
var puntoInizioDisegnoY = null;
var posizioneCorrenteMouseX = null;
var posizioneCorrenteMouseY = null;
var mouseIsDown = false;

document.addEventListener(
    'DOMContentLoaded',
    function () {
        console.log('DOMContentLoaded');
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
                        var colore = id.match(/[A-Z][a-z]+/g);

                        if (id == 'bottoneCancella') {
                            cancella();
                        } else {
                            selezionaColore(
                                {
                                    colore: colore[0].toLowerCase()
                                }
                            );
                        }
                    }
                )
            }
        );
        canvas.addEventListener('mousemove', function (e) {
            calcolaCoordinate(e);
        });
        canvas.addEventListener('mousedown', function (e) {
            calcolaCoordinate(e);
        });
        canvas.addEventListener('mouseup', function (e) {
            calcolaCoordinate(e);
        });
        canvas.addEventListener('mouseout', function (e) {
            calcolaCoordinate(e);
        });


    }
);

function selezionaColore(obj) {
    coloreSelezionato = obj.colore;
}

function calcolaCoordinate(e) {
    console.log(e.type);

    switch (e.type) {
        case 'mousemove' :
            if (mouseIsDown) {
                posizioneCorrenteMouseX = e.clientX - canvas.offsetLeft;
                posizioneCorrenteMouseY = e.clientY - canvas.offsetTop;
                //disegna();
                puntoInizioDisegnoX = posizioneCorrenteMouseX;
                puntoInizioDisegnoY = posizioneCorrenteMouseY;
            }
            break;
        case 'mousedown' :
            mouseIsDown = true;
            puntoInizioDisegnoX = posizioneCorrenteMouseX;
            puntoInizioDisegnoY = posizioneCorrenteMouseY;
            break;
        case 'mouseup' :
            mouseIsDown = false;

            break;
        case 'mouseout' :
            mouseIsDown = false;
            break;
    }
}

function disegna () {
    context.beginPath();
    context.moveTo(puntoInizioDisegnoX, puntoInizioDisegnoY);
}


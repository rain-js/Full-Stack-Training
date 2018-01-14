 var arrKey = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F',
     'G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    audio = document.querySelector('.audio')

for (var i = 0; i < arrKey.length; i++) {
    var ele = document.createElement('audio')
    ele.id = arrKey[i]
    ele.src = `./sounds/${arrKey[i]}.mp3`
    ele.preload = 'auto'

    audio.appendChild(ele)
}

document.onkeydown = function(event) {
    switch (event.code) {
        case 'Digit0':
            document.getElementById('0').play()
            break;
        case 'Digit1':
            document.getElementById('1').play()
            break;
        case 'Digit2':
            document.getElementById('2').play()
            break;
        case 'Digit3':
            document.getElementById('3').play()
            break;
        case 'Digit4':
            document.getElementById('4').play()
            break;
        case 'Digit5':
            document.getElementById('5').play()
            break;
        case 'Digit6':
            document.getElementById('6').play()
            break;
        case 'Digit7':
            document.getElementById('7').play()
            break;
        case 'Digit8':
            document.getElementById('8').play()
            break;
        case 'Digit9':
            document.getElementById('9').play()
            break;
        case 'KeyA':
            document.getElementById('A').play()
            break;
        case 'KeyB':
            document.getElementById('B').play()
            break;
        case 'KeyC':
            document.getElementById('C').play()
            break;
        case 'KeyD':
            document.getElementById('D').play()
            break;
        case 'KeyE':
            document.getElementById('E').play()
            break;
        case 'KeyF':
            document.getElementById('F').play()
            break;
        case 'KeyG':
            document.getElementById('G').play()
            break;
        case 'KeyH':
            document.getElementById('H').play()
            break;
        case 'KeyI':
            document.getElementById('I').play()
            break;
        case 'KeyJ':
            document.getElementById('J').play()
            break;
        case 'KeyK':
            document.getElementById('K').play()
            break;
        case 'KeyL':
            document.getElementById('L').play()
            break;
        case 'KeyM':
            document.getElementById('M').play()
            break;
        case 'KeyN':
            document.getElementById('N').play()
            break;
        case 'KeyO':
            document.getElementById('O').play()
            break;
        case 'KeyP':
            document.getElementById('P').play()
            break;
        case 'KeyQ':
            document.getElementById('Q').play()
            break;
        case 'KeyR':
            document.getElementById('R').play()
            break;
        case 'KeyS':
            document.getElementById('S').play()
            break;
        case 'KeyT':
            document.getElementById('T').play()
            break;
        case 'KeyU':
            document.getElementById('U').play()
            break;
        case 'KeyV':
            document.getElementById('V').play()
            break;
        case 'KeyW':
            document.getElementById('W').play()
            break;
        case 'KeyX':
            document.getElementById('X').play()
            break;
        case 'KeyY':
            document.getElementById('Y').play()
            break;
        case 'KeyZ':
            document.getElementById('Z').play()
            break;
        default:
            console.log('key not found.')
    }
}
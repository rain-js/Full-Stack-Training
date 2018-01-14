document.onkeydown = function(event) {
    switch (event.code) {
        case 'KeyA':
            document.getElementById('A').play()
            break;
        default:
            console.log('key not found.')
    }
}
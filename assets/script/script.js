document.body.addEventListener('keyup', (event)=>{ //Sempre que uma tecla for digitada a função sera executada
    playSound(event.code.toLowerCase());
}); //Evento obersador de todo corpo do site
document.querySelector('.composer button').addEventListener('click', ()=>{
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split(''); //gerando um array com cada letra digitada
        playComposition(songArray);
    }
});

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`); //Selecionando o arquivo de audio baseado na tecla apertada
    let keyElement=  document.querySelector(`div[data-key="${sound}"]`);//

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }
    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300)
    }
}
function playComposition(songArray){
    let wait = 0;
    for(let songItem of songArray){
        setTimeout(()=>{
            playSound(`key${songItem}`);
        }, wait);
        wait += 250;

       
    }
}

    // Função para reproduzir a música quando uma capa de jogo for clicada
    function playMusic(musicId) {
        var music = document.getElementById(musicId);
        if (music.paused){
            music.play();
        } else{
            music.pause();
        }
    }
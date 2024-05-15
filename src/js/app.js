document.addEventListener("DOMContentLoaded", () => {
    const handleClick = (audio) => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
    };

    const addClickListener = (audioId, imgClass) => {
        const audio = document.getElementById(audioId);
        const img = document.querySelector(imgClass);

        img.addEventListener("click", () => {
            handleClick(audio);
        });
    };

    // Map audio IDs para as Image classes
    const audioImageMap = [
        { audioId: "eu_ouco_player", imgClass: ".eu_ouco" },
        { audioId: "eu_quero_player", imgClass: ".eu_quero" },
        { audioId: "eu_sinto_player", imgClass: ".eu_sinto" },
        { audioId: "eu_vejo_player", imgClass: ".eu_vejo" },
        { audioId: "eu_gosto_player", imgClass: ".eu_gosto" },
        { audioId: "eu_penso_player", imgClass: ".eu_penso" },
        { audioId: "sim_player", imgClass: ".sim" },
        { audioId: "nao_player", imgClass: ".nao" }
    ];

    // Add click event listeners para todos os audio players
    audioImageMap.forEach(pair => {
        addClickListener(pair.audioId, pair.imgClass);
    });
});

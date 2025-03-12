const baseClasses = ["_19uopuu", "_ssxvf9l", "_1r8cd7xe", "_1yok8f4"];
khanwareDominates = true;

(async () => { 
    while (khanwareDominates) {
        if (features.autoAnswer && features.questionSpoof) {
            
            const classToCheck = [...baseClasses];

            if (features.nextRecomendation)  device.mobile ? classToCheck.push("_ixuggsz") : classToCheck.push("_1kkrg8oi");
            if (features.repeatQuestion) classToCheck.push("_ypgawqo");

            for (const q of classToCheck) {
                findAndClickByClass(q);
                const element = document.getElementsByClassName(q)[0];
                if (element && element.textContent === "Mostrar resumo") {
                    sendToast("🎉 Exercício concluído!", 3000);
                    playAudio("https://r2.e-z.host/4d0a0bea-60f8-44d6-9e74-3032a64a9f32/4x5g14gj.wav");
                }
            }
        }
        await delay(featureConfigs.autoAnswerDelay * 750);
    }
})();
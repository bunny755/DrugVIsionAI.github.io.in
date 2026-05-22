const URL = "./my_model/";

let model, webcam, labelContainer, maxPredictions;

async function init() {

    try {

        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // LOAD MODEL
        model = await tmImage.load(
            modelURL,
            metadataURL
        );

        maxPredictions =
        model.getTotalClasses();

        // WEBCAM
        const flip = true;

        webcam = new tmImage.Webcam(
            300,
            300,
            flip
        );

        await webcam.setup();

        await webcam.play();

        window.requestAnimationFrame(loop);

        // SHOW CAMERA
        document.getElementById(
            "webcam-container"
        ).innerHTML = "";

        document.getElementById(
            "webcam-container"
        ).appendChild(webcam.canvas);

        // LABELS
        labelContainer =
        document.getElementById(
            "label-container"
        );

        labelContainer.innerHTML = "";

        for(let i = 0;
            i < maxPredictions;
            i++){

            labelContainer.appendChild(
                document.createElement("div")
            );
        }

    } catch(error){

        console.error(error);

        alert(
            "ERROR: Model not loading. Check my_model folder."
        );
    }
}

async function loop() {

    webcam.update();

    await predict();

    window.requestAnimationFrame(loop);
}

async function predict() {

    const prediction =
    await model.predict(webcam.canvas);

    for(let i = 0;
        i < maxPredictions;
        i++){

        const classPrediction =

            prediction[i].className
            + " : "
            + (prediction[i]
            .probability * 100)
            .toFixed(2)
            + "%";

        labelContainer.childNodes[i]
        .innerHTML = classPrediction;
    }
}

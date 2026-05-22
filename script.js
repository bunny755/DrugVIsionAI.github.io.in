const URL = "./my_model/";

let model, webcam, labelContainer, maxPredictions;

// LOAD MODEL + WEBCAM
async function init() {

    const modelURL =
    URL + "model.json";

    const metadataURL =
    URL + "metadata.json";

    // LOAD MODEL
    model = await tmImage.load(
        modelURL,
        metadataURL
    );

    maxPredictions =
    model.getTotalClasses();

    // WEBCAM SETUP
    const flip = true;

    webcam = new tmImage.Webcam(
        300,
        300,
        flip
    );

    await webcam.setup();

    await webcam.play();

    window.requestAnimationFrame(loop);

    // ADD WEBCAM
    document.getElementById(
        "webcam-container"
    ).appendChild(webcam.canvas);

    // LABELS
    labelContainer =
    document.getElementById(
        "label-container"
    );

    for(let i = 0;
        i < maxPredictions;
        i++){

        labelContainer.appendChild(
            document.createElement("div")
        );
    }
}

// LOOP
async function loop() {

    webcam.update();

    await predict();

    window.requestAnimationFrame(loop);
}

// PREDICT
async function predict() {

    const prediction =
    await model.predict(
        webcam.canvas
    );

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

        labelContainer
        .childNodes[i]
        .innerHTML =
        classPrediction;
    }
}

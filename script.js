const URL = "./my_model/";

let model, webcam;

// START CAMERA
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

    // START WEBCAM
    webcam = new tmImage.Webcam(
        300,
        300,
        true
    );

    await webcam.setup();

    await webcam.play();

    // SHOW CAMERA
    document.getElementById(
        "webcam-container"
    ).innerHTML = "";

    document.getElementById(
        "webcam-container"
    ).appendChild(webcam.canvas);

    // LIVE CAMERA
    loop();
}

// CAMERA LOOP
async function loop() {

    webcam.update();

    requestAnimationFrame(loop);
}

// CAPTURE + DETECT
async function captureAndPredict() {

    // PREDICT
    const prediction =
    await model.predict(webcam.canvas);

    // BEST RESULT
    let highestPrediction =
    prediction[0];

    for(let i = 1;
        i < prediction.length;
        i++){

        if(
            prediction[i].probability >
            highestPrediction.probability
        ){

            highestPrediction =
            prediction[i];
        }
    }

    // RESULT BOX
    const resultBox =
    document.getElementById(
        "label-container"
    );

    // SHOW RESULT
    if(highestPrediction.probability > 0.80){

        resultBox.innerHTML = `

            <div style="
                background:#1e293b;
                padding:20px;
                border-radius:15px;
                width:300px;
                margin:auto;
                font-size:22px;
            ">

                <strong>

                    ${highestPrediction.className}

                </strong>

                <br><br>

                Accuracy :
                ${(highestPrediction.probability * 100).toFixed(2)}%

            </div>
        `;

    } else {

        resultBox.innerHTML = `

            <div style="
                background:#1e293b;
                padding:20px;
                border-radius:15px;
                width:300px;
                margin:auto;
                font-size:20px;
            ">

                No Drug Detected Clearly

            </div>
        `;
    }
}

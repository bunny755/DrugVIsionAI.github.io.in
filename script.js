const URL = "./my_model/";

let model, webcam;

// START CAMERA + LOAD MODEL
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

    // START LOOP
    loop();
}

// CAMERA LOOP
async function loop() {

    webcam.update();

    window.requestAnimationFrame(loop);
}

// CAPTURE + DETECT
async function captureAndPredict() {

    // UPDATE CAMERA FRAME
    webcam.update();

    // PREDICT IMAGE
    const prediction =
    await model.predict(webcam.canvas);

    // FIND HIGHEST RESULT
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

    // SHOW ONLY DRUG NAME
    if(highestPrediction.probability > 0.80){

        resultBox.innerHTML = `

            <div style="
                background:#1e293b;
                padding:20px;
                border-radius:15px;
                width:300px;
                margin:auto;
                font-size:28px;
                color:white;
                text-align:center;
            ">

                <strong>

                    ${highestPrediction.className}

                </strong>

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
        font-size:28px;
        color:white;
        text-align:center;
    ">

        <strong>

            ${highestPrediction.className}

        </strong>

    </div>
`;
        `;
    }
}

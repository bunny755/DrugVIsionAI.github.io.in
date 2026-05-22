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

async function predict() {

    const prediction =
    await model.predict(webcam.canvas);

    // FIND HIGHEST PREDICTION
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

    // SHOW ONLY BEST RESULT
    let resultText = "";

    if(highestPrediction.probability > 0.80){

        resultText =

        highestPrediction.className
        + " : "
        + (highestPrediction.probability * 100)
        .toFixed(2)
        + "%";

    } else {

        resultText =
        "No Drug Detected Clearly";
    }

    labelContainer.innerHTML = `

        <div>

            ${resultText}

        </div>
    `;
}

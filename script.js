async function predict() {

    // GET PREDICTIONS
    const prediction =
    await model.predict(webcam.canvas);

    // STORE HIGHEST RESULT
    let highestPrediction =
    prediction[0];

    // FIND BEST MATCH
    for(let i = 1; i < prediction.length; i++){

        if(
            prediction[i].probability >
            highestPrediction.probability
        ){

            highestPrediction =
            prediction[i];
        }
    }

    // SHOW RESULT
    if(highestPrediction.probability > 0.80){

        labelContainer.innerHTML = `

            <div>

                ${highestPrediction.className}

                <br><br>

                Accuracy :
                ${(highestPrediction.probability * 100).toFixed(2)}%

            </div>
        `;

    } else {

        labelContainer.innerHTML = `

            <div>

                No Drug Detected Clearly

            </div>
        `;
    }
}

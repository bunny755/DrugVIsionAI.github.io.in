const URL = "./";

let model;

async function loadModel() {

    model = await tmImage.load(
        URL + "model.json",
        URL + "metadata.json"
    );

    console.log("Model Loaded Successfully");
}

loadModel();

const imageUpload = document.getElementById("imageUpload");
const preview = document.getElementById("preview");
const result = document.getElementById("result");

imageUpload.addEventListener("change", async function(event){

    const file = event.target.files[0];

    if(!file) return;

    preview.src = URL.createObjectURL(file);

    preview.style.display = "block";

    preview.onload = async function(){

        const predictions = await model.predict(preview);

        result.innerHTML = "";

        predictions.forEach(prediction => {

            const probability =
                (prediction.probability * 100).toFixed(2);

            result.innerHTML += `
                <div class="result-item">
                    <span>${prediction.className}</span>
                    : ${probability}%
                </div>
            `;
        });
    };
});

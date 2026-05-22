const URL = "./my_model/";

let model, webcam;

// HERBAL DRUG DATABASE
const drugDatabase = {

    "gooseberry": {
        hindi: "आंवला",
        biological: "Phyllanthus emblica / Emblica officinalis",
        family: "Phyllanthaceae",
        found: "India, Sri Lanka, Nepal, China",
        uses: "Used in Triphala, Chyawanprash, hair oils, immunity boosters, liver tonics",
        medicinal: "Improves digestion, immunity, eyesight, diabetes management, skin care"
    },

    "cardamom": {
        hindi: "इलायची",
        biological: "Elettaria cardamomum",
        family: "Zingiberaceae",
        found: "Kerala, Karnataka, Tamil Nadu, Sri Lanka, Guatemala",
        uses: "Flavoring agent in syrups, digestive medicines, cough preparations",
        medicinal: "Relieves indigestion, flatulence, nausea, bad breath"
    },

    "lemongrass": {
        hindi: "लेमन ग्रास",
        biological: "Cymbopogon citratus",
        family: "Poaceae",
        found: "India, Sri Lanka, Thailand, Indonesia, Africa",
        uses: "Essential oils, herbal teas, aromatherapy, mosquito repellents",
        medicinal: "Reduces anxiety, fever, fungal infections, muscle pain"
    },

    "eucalyptus": {
        hindi: "सफेदा",
        biological: "Eucalyptus globulus",
        family: "Myrtaceae",
        found: "Australia, India, Brazil, China",
        uses: "Cough syrups, inhalers, pain balms, mouthwashes",
        medicinal: "Treats cough, cold, asthma, nasal congestion"
    },

    "citronella": {
        hindi: "सिट्रोनेला घास",
        biological: "Cymbopogon nardus",
        family: "Poaceae",
        found: "India, Indonesia, Sri Lanka",
        uses: "Mosquito repellents, soaps, perfumes",
        medicinal: "Antiseptic, insect repellent, headache relief"
    },

    "rose": {
        hindi: "गुलाब",
        biological: "Rosa damascena",
        family: "Rosaceae",
        found: "India, Bulgaria, Turkey, Iran",
        uses: "Rose water, cosmetics, eye lotions",
        medicinal: "Cooling, anti-inflammatory, stress relief"
    },

    "sandalwood": {
        hindi: "चंदन",
        biological: "Santalum album",
        family: "Santalaceae",
        found: "Karnataka, Tamil Nadu, Kerala, Indonesia",
        uses: "Perfumes, ointments, Ayurvedic medicines",
        medicinal: "Skin disorders, acne, cooling effect"
    },

    "camphor": {
        hindi: "कपूर",
        biological: "Cinnamomum camphora",
        family: "Lauraceae",
        found: "China, Japan, Taiwan, India",
        uses: "Pain balms, vapor rubs, antiseptic creams",
        medicinal: "Pain relief, decongestant, antimicrobial"
    },

    "ashwagandha": {
        hindi: "अश्वगंधा",
        biological: "Withania somnifera",
        family: "Solanaceae",
        found: "India, Pakistan, Africa",
        uses: "Stress relief capsules, immunity boosters",
        medicinal: "Reduces anxiety, improves stamina and sleep"
    },

    "digitalis": {
        hindi: "डिजिटेलिस",
        biological: "Digitalis purpurea",
        family: "Plantaginaceae",
        found: "Europe and cultivated worldwide",
        uses: "Used in cardiac medicines",
        medicinal: "Treats heart failure and atrial fibrillation"
    }
};

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

    // CAMERA LOOP
    loop();
}

// CAMERA LOOP
async function loop() {

    webcam.update();

    window.requestAnimationFrame(loop);
}

// DETECT DRUG
async function captureAndPredict() {

    webcam.update();

    // PREDICT
    const prediction =
    await model.predict(webcam.canvas);

    // HIGHEST RESULT
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

    // CONVERT TO LOWERCASE
    const detectedDrug =
    highestPrediction.className.toLowerCase();

    // GET DRUG DATA
    const drug =
    drugDatabase[detectedDrug];

    // RESULT BOX
    const resultBox =
    document.getElementById(
        "label-container"
    );

    // SHOW DRUG NAME
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

    // INFO BOX
    const infoBox =
    document.getElementById(
        "drug-info"
    );

    // SHOW INFORMATION
    if(drug){

        infoBox.innerHTML = `

            <h2>
                ${highestPrediction.className}
            </h2>

            <p>
                <strong>Hindi Name:</strong>
                ${drug.hindi}
            </p>

            <p>
                <strong>Biological Name:</strong>
                ${drug.biological}
            </p>

            <p>
                <strong>Family:</strong>
                ${drug.family}
            </p>

            <p>
                <strong>Found In:</strong>
                ${drug.found}
            </p>

            <p>
                <strong>Pharmacy Uses:</strong>
                ${drug.uses}
            </p>

            <p>
                <strong>Medicinal Uses:</strong>
                ${drug.medicinal}
            </p>
        `;

    } else {

        infoBox.innerHTML = `

            <h2>
                No Information Available
            </h2>
        `;
    }
}

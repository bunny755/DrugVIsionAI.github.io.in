const URL = "./my_model/";

let model, webcam;

const drugDatabase = {

    "gooseberry": {
        hindi: "आंवला (Amla)",
        biological: "Phyllanthus emblica / Emblica officinalis",
        family: "Phyllanthaceae",
        part: "Fruit",

        description: `Amla is a medium-sized deciduous tree that grows up to 8–18 meters in height. The bark is light grey and exfoliates in irregular flakes. The leaves are small, simple, and closely arranged, giving the appearance of pinnate leaves. The fruit is nearly spherical, smooth, pale greenish-yellow, and contains six vertical furrows. The fruit has a sour and astringent taste because of the presence of vitamin C and tannins.`,

        found: `Amla is native to India and is widely distributed in tropical and subtropical regions. It grows abundantly in Uttar Pradesh, Madhya Pradesh, Rajasthan, Gujarat, Maharashtra, and Tamil Nadu. It is also found in Sri Lanka, Nepal, Pakistan, Bangladesh, and Southeast Asian countries. It grows well in dry deciduous forests and tolerates moderate drought conditions.`,

        constituents: `Vitamin C (ascorbic acid), Tannins, Gallic acid, Ellagic acid, Emblicanin A and B, Pectin, Minerals and amino acids.`,

        uses: `Amla is widely used in Ayurvedic, Unani, and herbal formulations. It is an important ingredient in Chyawanprash, Triphala powder, Liver tonics, Antioxidant syrups, Hair oils and shampoos, Vitamin supplements, and Anti-aging formulations.`,

        medicinal: `Amla acts as Antioxidant, Immunity booster, Digestive stimulant, Mild laxative, Antidiabetic agent, Hepatoprotective agent, and Anti-inflammatory medicine. It is commonly used for treating acidity, constipation, anemia, cough, cold, and skin disorders.`
    },

    "cardamom": {
        hindi: "इलायची (Elaichi)",
        biological: "Elettaria cardamomum",
        family: "Zingiberaceae",
        part: "Fruits and seeds",

        description: `Cardamom is a perennial herbaceous plant with thick rhizomes and leafy shoots. The plant grows up to 2–4 meters in height. The fruits are small green capsules containing aromatic black seeds. The pleasant aroma is due to volatile oils present in the seeds.`,

        found: `Cardamom is native to the evergreen forests of South India and Sri Lanka. It is extensively cultivated in Kerala, Karnataka, and Tamil Nadu. It requires humid climate, heavy rainfall, and shaded conditions for proper growth.`,

        constituents: `Volatile oil, Cineole, Terpinyl acetate, Limonene, Sabinene.`,

        uses: `Cardamom is widely used as Flavoring agent in pharmaceutical syrups, Ingredient in digestive preparations, Aromatic stimulant, and Carminative medicine. It improves taste and smell in medicinal products.`,

        medicinal: `Relieves indigestion, Reduces flatulence, Improves appetite, Freshens breath, and Used in cough and bronchitis.`
    },

    "lemongrass": {
        hindi: "लेमन ग्रास / गांध तृण",
        biological: "Cymbopogon citratus",
        family: "Poaceae",
        part: "Leaves and oil",

        description: `Lemongrass is a tall perennial aromatic grass with long narrow leaves and fibrous roots. It produces a strong lemon-like aroma due to the presence of citral-rich essential oil.`,

        found: `Lemongrass grows in tropical and subtropical climates. It is cultivated in India, Sri Lanka, Thailand, Indonesia, Africa, and South America. In India, it is grown in Kerala, Karnataka, Maharashtra, and Uttar Pradesh.`,

        constituents: `Citral, Geraniol, Limonene, Myrcene, Citronellal.`,

        uses: `Lemongrass oil is used in Aromatherapy, Antiseptic creams, Herbal teas, Cosmetic products, and Mosquito repellents.`,

        medicinal: `Reduces fever, Relieves digestive disorders, Antimicrobial activity, Reduces anxiety and stress, and Used in cold and cough remedies.`
    },

    "rose": {
        hindi: "गुलाब",
        biological: "Rosa damascena",
        family: "Rosaceae",
        part: "Petals and rose oil",

        description: `Rose is a thorny flowering shrub with fragrant colorful flowers. The petals contain volatile oils responsible for fragrance.`,

        found: `Rose is cultivated in India, Turkey, Bulgaria, Iran, and France. In India, roses are grown in Uttar Pradesh, Rajasthan, Punjab, and Tamil Nadu.`,

        constituents: `Geraniol, Citronellol, Nerol, Flavonoids, Tannins.`,

        uses: `Rose water preparation, Perfumes, Skin creams, Eye lotions, and Flavoring agents.`,

        medicinal: `Cooling effect, Mild laxative, Antidepressant, Skin tonic, and Relieves eye irritation.`
    },

    "sandalwood": {
        hindi: "चंदन",
        biological: "Santalum album",
        family: "Santalaceae",
        part: "Heartwood and oil",

        description: `Sandalwood is a small evergreen aromatic tree. The heartwood contains fragrant essential oil. The tree is semi-parasitic and derives nutrients from nearby plant roots.`,

        found: `It is mainly found in Karnataka, Tamil Nadu, and Kerala. India is famous for high-quality sandalwood production.`,

        constituents: `Santalol, Santene, Santalic acid.`,

        uses: `Perfumes, Aromatherapy products, Antiseptic creams, and Incense preparations.`,

        medicinal: `Cooling agent, Treats skin disorders, Reduces anxiety, and Used in urinary infections.`
    },

    "ashwagandha": {
        hindi: "अश्वगंधा (Ashwagandha)",
        biological: "Withania somnifera",
        family: "Solanaceae",
        part: "Roots mainly; leaves and seeds are also used medicinally",

        description: `Ashwagandha is a small woody shrub that grows about 30–150 cm in height. The plant has branched stems covered with fine hairs. The leaves are dull green, ovate, and simple. The flowers are small, greenish-yellow, and bell-shaped. The fruit is a small orange-red berry enclosed in a papery calyx. The roots are long, cylindrical, fleshy, and brownish in color. They possess a characteristic horse-like smell, which is why the plant is called “Ashwagandha”. Ashwagandha is considered one of the most important medicinal plants in Ayurveda and is classified as a Rasayana drug.`,

        found: `Ashwagandha is native to India, the Middle East, and parts of Africa. It grows naturally in dry and subtropical regions. In India, it is mainly cultivated in Madhya Pradesh, Rajasthan, Gujarat, Maharashtra, Uttar Pradesh, and Punjab. The plant grows well in sandy loam soil, dry climates, areas with low rainfall, and temperatures between 20–35°C.`,

        constituents: `Withanolides, Alkaloids, Steroidal lactones.`,

        uses: `Stress relief capsules, Immunity boosters, Ayurvedic Rasayana preparations.`,

        medicinal: `Reduces anxiety, Improves stamina, Improves sleep, Promotes longevity and vitality.`
    },

    "digitalis": {
        hindi: "डिजिटेलिस (Digitalis)",
        biological: "Digitalis purpurea and Digitalis lanata",
        family: "Plantaginaceae",
        part: "Leaves",

        description: `Digitalis is a biennial or perennial herbaceous plant famous for its medicinal value in heart diseases. The plant grows up to 1–2 meters in height and bears attractive tubular bell-shaped flowers that are purple, pink, white, or cream colored. The leaves are large, simple, ovate-lanceolate, rough, hairy, and arranged in a rosette during the first year. The medicinal activity of Digitalis is mainly due to the presence of powerful cardiac glycosides that act directly on the heart muscles.`,

        found: `Digitalis is native to Europe, Western Asia, and Mediterranean regions. It is cultivated in Germany, France, Hungary, England, and the United States. In India, it is cultivated in Kashmir, Himachal Pradesh, and Nilgiri Hills.`,

        constituents: `Purpurea glycoside A, Purpurea glycoside B, Digitoxin, Digoxin, Gitoxin, Flavonoids, Saponins, Fixed oils.`,

        uses: `Digoxin tablets, Digitoxin injections, Cardiotonic medicines, Heart failure treatments, Cardiac arrhythmia medicines.`,

        medicinal: `Strengthens heart muscle contractions, Improves pumping efficiency of the heart, Regulates irregular heartbeat, Controls cardiac arrhythmias, Reduces edema associated with heart disease.`,

        toxicity: `Symptoms of toxicity include nausea, vomiting, diarrhea, blurred vision, irregular heartbeat, dizziness, confusion, and severe poisoning may lead to fatal cardiac arrest.`
    }
};

// START CAMERA
async function init() {

    const modelURL =
    URL + "model.json";

    const metadataURL =
    URL + "metadata.json";

    model =
    await tmImage.load(
        modelURL,
        metadataURL
    );

    webcam =
    new tmImage.Webcam(
        350,
        350,
        true
    );

    await webcam.setup();

    await webcam.play();

    document.getElementById(
        "webcam-container"
    ).innerHTML = "";

    document.getElementById(
        "webcam-container"
    ).appendChild(webcam.canvas);

    window.requestAnimationFrame(loop);
}

// CAMERA LOOP
async function loop(){

    webcam.update();

    window.requestAnimationFrame(loop);
}

// DETECTION
async function captureAndPredict(){

    webcam.update();

    const prediction =
    await model.predict(webcam.canvas);

    let highestPrediction =
    prediction[0];

    for(let i=1;i<prediction.length;i++){

        if(
            prediction[i].probability >
            highestPrediction.probability
        ){

            highestPrediction =
            prediction[i];
        }
    }

    const detectedDrug =
    highestPrediction.className
    .toLowerCase();

    const drug =
    drugDatabase[detectedDrug];

    document.getElementById(
        "label-container"
    ).innerHTML = `

        <div class="result-card">

            <h2>
                ${highestPrediction.className}
            </h2>

        </div>
    `;

    const infoBox =
    document.getElementById(
        "drug-info"
    );

    if(drug){

        infoBox.innerHTML = `

            <h2>
                ${highestPrediction.className}
            </h2>

            <div class="info-grid">

                <div class="info-box">
                    <strong>Hindi Name</strong>
                    ${drug.hindi}
                </div>

                <div class="info-box">
                    <strong>Biological Name</strong>
                    ${drug.biological}
                </div>

                <div class="info-box">
                    <strong>Family</strong>
                    ${drug.family}
                </div>

                <div class="info-box">
                    <strong>Part Used</strong>
                    ${drug.part}
                </div>

                <div class="info-box">
                    <strong>Description</strong>
                    ${drug.description}
                </div>

                <div class="info-box">
                    <strong>Found In</strong>
                    ${drug.found}
                </div>

                <div class="info-box">
                    <strong>Chemical Constituents</strong>
                    ${drug.constituents}
                </div>

                <div class="info-box">
                    <strong>Uses in Pharmacy</strong>
                    ${drug.uses}
                </div>

                <div class="info-box">
                    <strong>Medicinal Uses</strong>
                    ${drug.medicinal}
                </div>

                ${drug.toxicity ? `

                <div class="info-box">
                    <strong>Toxicity</strong>
                    ${drug.toxicity}
                </div>

                ` : ""}

            </div>
        `;

    } else {

        infoBox.innerHTML = `

            <h2>
                No Information Available
            </h2>
        `;
    }
}

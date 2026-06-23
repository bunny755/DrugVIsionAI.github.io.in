const URL = "./my_model/";

let model, webcam;

// HERBAL DRUG DATABASE
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
,
"tulsi": {
    hindi: "तुलसी",
    biological: "Ocimum sanctum",
    family: "Lamiaceae",
    part: "Leaves, whole plant",

    description: `Tulsi is an aromatic, erect herb growing up to 30–60 cm in height. It has branched stems, opposite green or purple leaves, and small purplish flowers arranged in spikes. The plant has a strong characteristic odor due to essential oils.`,

    found: `Tulsi is native to India and widely grown throughout the country in gardens and temples. It thrives in tropical and subtropical climates and grows well in well-drained soil with good sunlight.`,

    constituents: `Tulsi contains essential oils rich in eugenol, along with ursolic acid, rosmarinic acid, and flavonoids.`,

    uses: `It is used in herbal syrups, cough preparations, and immunity-boosting formulations.`,

    medicinal: `Tulsi acts as an antimicrobial, anti-inflammatory, and adaptogenic agent. It is used in cough, cold, fever, and stress-related disorders.`
},

"neem": {
    hindi: "नीम",
    biological: "Azadirachta indica",
    family: "Meliaceae",
    part: "Leaves, bark, seeds",

    description: `Neem is a large evergreen tree with compound leaves and small white flowers. It produces olive-like fruits. It is well known for its bitter taste and medicinal properties.`,

    found: `Neem is native to India and grows widely in tropical and semi-arid regions. It is commonly found in villages, roadsides, and forests.`,

    constituents: `It contains azadirachtin, nimbin, nimbidin, and various flavonoids.`,

    uses: `Used in antiseptic creams, soaps, and dental products.`,

    medicinal: `Neem shows antibacterial, antifungal, and anti-inflammatory properties. It is used in skin diseases, infections, and as a blood purifier.`
},

"turmeric": {
    hindi: "हल्दी",
    biological: "Curcuma longa",
    family: "Zingiberaceae",
    part: "Rhizome",

    description: `Turmeric is a perennial herb with underground rhizomes that are bright yellow in color. The plant has long leaves and yellow flowers.`,

    found: `Native to India and Southeast Asia. Grown in states like Maharashtra, Tamil Nadu, Andhra Pradesh. Requires warm and humid climate.`,

    constituents: `Contains curcumin, volatile oils, and resins.`,

    uses: `Used in anti-inflammatory formulations and topical preparations.`,

    medicinal: `Acts as an anti-inflammatory, antioxidant, and antiseptic. Used in wounds, arthritis, and liver disorders.`
},

"aloe vera": {
    hindi: "घृतकुमारी",
    biological: "Aloe barbadensis",
    family: "Liliaceae",
    part: "Leaves (gel)",

    description: `Aloe vera is a succulent plant with thick, fleshy leaves containing a clear gel. Leaves have spiny margins and store water.`,

    found: `Grows in dry and arid regions. Cultivated widely in India, Africa, and tropical regions.`,

    constituents: `Contains aloin, aloe-emodin, and polysaccharides.`,

    uses: `Used in creams, gels, laxative preparations, and cosmetics.`,

    medicinal: `Used for wound healing, burns, skin care, and constipation.`
},

"brahmi": {
    hindi: "ब्राह्मी",
    biological: "Bacopa monnieri",
    family: "Scrophulariaceae",
    part: "Whole plant",

    description: `Brahmi is a small creeping herb that grows in moist and marshy areas. It has succulent, oblong leaves and small white or light purple flowers. The plant spreads along the ground and roots at nodes.`,

    found: `Found in wet areas in India.`,

    constituents: `Bacosides.`,

    uses: `Brain tonics.`,

    medicinal: `Memory enhancer.`
},

"giloy": {
    hindi: "गिलोय",
    biological: "Tinospora cordifolia",
    family: "Menispermaceae",
    part: "Stem",

    description: `Giloy is a large climbing shrub with long, twining stems and heart-shaped leaves. The stem is fleshy and green, and it produces aerial roots. It often grows over trees and supports itself by climbing.`,

    found: `Found throughout India.`,

    constituents: `Alkaloids.`,

    uses: `Immunity boosters.`,

    medicinal: `Used in fever and immunity improvement.`
},

"peppermint": {
    hindi: "पुदीना",
    biological: "Mentha piperita",
    family: "Lamiaceae",
    part: "Leaves",

    description: `Peppermint is a small herb with green leaves and a strong aromatic smell. It has square stems and produces small purple flowers. The plant gives a cooling sensation due to menthol.`,

    found: `Found in temperate regions.`,

    constituents: `Menthol.`,

    uses: `Used in lozenges.`,

    medicinal: `Used in indigestion and provides cooling effect.`
},

"black pepper": {
    hindi: "काली मिर्च",
    biological: "Piper nigrum",
    family: "Piperaceae",
    part: "Dried fruits",

    description: `Black Pepper consists of small round wrinkled berries having black or brown color with strong pungent taste.`,

    found: `Cultivated mainly in tropical regions of India especially Kerala, Karnataka, and Tamil Nadu.`,

    constituents: `Piperine, Volatile oil, Chavicine.`,

    uses: `Used in Trikatu formulation and enhances drug absorption.`,

    medicinal: `Used in indigestion, cold, and cough.`
},

"clove": {
    hindi: "लौंग",
    biological: "Syzygium aromaticum",
    family: "Myrtaceae",
    part: "Flower buds",

    description: `Clove consists of dried flower buds rich in essential oil. It possesses strong aroma due to eugenol.`,

    found: `Cultivated in tropical regions including India, Indonesia, and Sri Lanka.`,

    constituents: `Eugenol (70–90%), Caryophyllene, Tannins.`,

    uses: `Used in dental preparations, mouthwash, and toothpaste.`,

    medicinal: `Used in tooth pain relief and as digestive aid.`
}

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
        false
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

// OPEN BACK CAMERA
async function openBackCamera(){

    if(webcam){

        webcam.stop();
    }

    await init("environment");
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

            <div class="info-box">

                <div class="info-title">
                    Hindi Name
                </div>

                <div class="info-text">
                    ${drug.hindi}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Biological Name
                </div>

                <div class="info-text">
                    ${drug.biological}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Family
                </div>

                <div class="info-text">
                    ${drug.family}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Part Used
                </div>

                <div class="info-text">
                    ${drug.part}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Description
                </div>

                <div class="info-text">
                    ${drug.description}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Found In
                </div>

                <div class="info-text">
                    ${drug.found}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Chemical Constituents
                </div>

                <div class="info-text">
                    ${drug.constituents}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Uses in Pharmacy
                </div>

                <div class="info-text">
                    ${drug.uses}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Medicinal Uses
                </div>

                <div class="info-text">
                    ${drug.medicinal}
                </div>

            </div>

            ${drug.toxicity ? `

            <div class="info-box">

                <div class="info-title">
                    Toxicity
                </div>

                <div class="info-text">
                    ${drug.toxicity}
                </div>

            </div>

            ` : ""}

        `;

    } else {

        infoBox.innerHTML = `

            <h2>
                No Information Available
            </h2>
        `;
    }
}
// SEARCH DRUG
function searchDrug(){

    const input =
    document.getElementById(
        "searchInput"
    ).value.toLowerCase();

    const drug =
    drugDatabase[input];

    const infoBox =
    document.getElementById(
        "drug-info"
    );

    const labelBox =
    document.getElementById(
        "label-container"
    );

    if(drug){

        labelBox.innerHTML = `

            <div class="result-card">

                <h2>
                    ${input}
                </h2>

            </div>
        `;

        infoBox.innerHTML = `

            <div class="info-box">

                <div class="info-title">
                    Hindi Name
                </div>

                <div class="info-text">
                    ${drug.hindi}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Biological Name
                </div>

                <div class="info-text">
                    ${drug.biological}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Description
                </div>

                <div class="info-text">
                    ${drug.description}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Found In
                </div>

                <div class="info-text">
                    ${drug.found}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Uses in Pharmacy
                </div>

                <div class="info-text">
                    ${drug.uses}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Medicinal Uses
                </div>

                <div class="info-text">
                    ${drug.medicinal}
                </div>

            </div>
        `;

    } else {

        labelBox.innerHTML = `

            <div class="result-card">

                <h2>
                    Drug Not Found
                </h2>

            </div>
        `;

        infoBox.innerHTML = "";
    }
}

const URL = "./my_model/";

let model, webcam;

// HERBAL DRUG DATABASE
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
,
"tulsi": {
    hindi: "तुलसी",
    biological: "Ocimum sanctum",
    family: "Lamiaceae",
    part: "Leaves, whole plant",

    description: `Tulsi is an aromatic, erect herb growing up to 30–60 cm in height. It has branched stems, opposite green or purple leaves, and small purplish flowers arranged in spikes. The plant has a strong characteristic odor due to essential oils.`,

    found: `Tulsi is native to India and widely grown throughout the country in gardens and temples. It thrives in tropical and subtropical climates and grows well in well-drained soil with good sunlight.`,

    constituents: `Tulsi contains essential oils rich in eugenol, along with ursolic acid, rosmarinic acid, and flavonoids.`,

    uses: `It is used in herbal syrups, cough preparations, and immunity-boosting formulations.`,

    medicinal: `Tulsi acts as an antimicrobial, anti-inflammatory, and adaptogenic agent. It is used in cough, cold, fever, and stress-related disorders.`
},

"neem": {
    hindi: "नीम",
    biological: "Azadirachta indica",
    family: "Meliaceae",
    part: "Leaves, bark, seeds",

    description: `Neem is a large evergreen tree with compound leaves and small white flowers. It produces olive-like fruits. It is well known for its bitter taste and medicinal properties.`,

    found: `Neem is native to India and grows widely in tropical and semi-arid regions. It is commonly found in villages, roadsides, and forests.`,

    constituents: `It contains azadirachtin, nimbin, nimbidin, and various flavonoids.`,

    uses: `Used in antiseptic creams, soaps, and dental products.`,

    medicinal: `Neem shows antibacterial, antifungal, and anti-inflammatory properties. It is used in skin diseases, infections, and as a blood purifier.`
},

"turmeric": {
    hindi: "हल्दी",
    biological: "Curcuma longa",
    family: "Zingiberaceae",
    part: "Rhizome",

    description: `Turmeric is a perennial herb with underground rhizomes that are bright yellow in color. The plant has long leaves and yellow flowers.`,

    found: `Native to India and Southeast Asia. Grown in states like Maharashtra, Tamil Nadu, Andhra Pradesh. Requires warm and humid climate.`,

    constituents: `Contains curcumin, volatile oils, and resins.`,

    uses: `Used in anti-inflammatory formulations and topical preparations.`,

    medicinal: `Acts as an anti-inflammatory, antioxidant, and antiseptic. Used in wounds, arthritis, and liver disorders.`
},

"aloe vera": {
    hindi: "घृतकुमारी",
    biological: "Aloe barbadensis",
    family: "Liliaceae",
    part: "Leaves (gel)",

    description: `Aloe vera is a succulent plant with thick, fleshy leaves containing a clear gel. Leaves have spiny margins and store water.`,

    found: `Grows in dry and arid regions. Cultivated widely in India, Africa, and tropical regions.`,

    constituents: `Contains aloin, aloe-emodin, and polysaccharides.`,

    uses: `Used in creams, gels, laxative preparations, and cosmetics.`,

    medicinal: `Used for wound healing, burns, skin care, and constipation.`
},

"brahmi": {
    hindi: "ब्राह्मी",
    biological: "Bacopa monnieri",
    family: "Scrophulariaceae",
    part: "Whole plant",

    description: `Brahmi is a small creeping herb that grows in moist and marshy areas. It has succulent, oblong leaves and small white or light purple flowers. The plant spreads along the ground and roots at nodes.`,

    found: `Found in wet areas in India.`,

    constituents: `Bacosides.`,

    uses: `Brain tonics.`,

    medicinal: `Memory enhancer.`
},

"giloy": {
    hindi: "गिलोय",
    biological: "Tinospora cordifolia",
    family: "Menispermaceae",
    part: "Stem",

    description: `Giloy is a large climbing shrub with long, twining stems and heart-shaped leaves. The stem is fleshy and green, and it produces aerial roots. It often grows over trees and supports itself by climbing.`,

    found: `Found throughout India.`,

    constituents: `Alkaloids.`,

    uses: `Immunity boosters.`,

    medicinal: `Used in fever and immunity improvement.`
},

"peppermint": {
    hindi: "पुदीना",
    biological: "Mentha piperita",
    family: "Lamiaceae",
    part: "Leaves",

    description: `Peppermint is a small herb with green leaves and a strong aromatic smell. It has square stems and produces small purple flowers. The plant gives a cooling sensation due to menthol.`,

    found: `Found in temperate regions.`,

    constituents: `Menthol.`,

    uses: `Used in lozenges.`,

    medicinal: `Used in indigestion and provides cooling effect.`
},

"black pepper": {
    hindi: "काली मिर्च",
    biological: "Piper nigrum",
    family: "Piperaceae",
    part: "Dried fruits",

    description: `Black Pepper consists of small round wrinkled berries having black or brown color with strong pungent taste.`,

    found: `Cultivated mainly in tropical regions of India especially Kerala, Karnataka, and Tamil Nadu.`,

    constituents: `Piperine, Volatile oil, Chavicine.`,

    uses: `Used in Trikatu formulation and enhances drug absorption.`,

    medicinal: `Used in indigestion, cold, and cough.`
},

"clove": {
    hindi: "लौंग",
    biological: "Syzygium aromaticum",
    family: "Myrtaceae",
    part: "Flower buds",

    description: `Clove consists of dried flower buds rich in essential oil. It possesses strong aroma due to eugenol.`,

    found: `Cultivated in tropical regions including India, Indonesia, and Sri Lanka.`,

    constituents: `Eugenol (70–90%), Caryophyllene, Tannins.`,

    uses: `Used in dental preparations, mouthwash, and toothpaste.`,

    medicinal: `Used in tooth pain relief and as digestive aid.`
}

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

// OPEN BACK CAMERA
async function openBackCamera(){

    if(webcam){

        webcam.stop();
    }

    await init("environment");
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

            <div class="info-box">

                <div class="info-title">
                    Hindi Name
                </div>

                <div class="info-text">
                    ${drug.hindi}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Biological Name
                </div>

                <div class="info-text">
                    ${drug.biological}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Family
                </div>

                <div class="info-text">
                    ${drug.family}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Part Used
                </div>

                <div class="info-text">
                    ${drug.part}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Description
                </div>

                <div class="info-text">
                    ${drug.description}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Found In
                </div>

                <div class="info-text">
                    ${drug.found}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Chemical Constituents
                </div>

                <div class="info-text">
                    ${drug.constituents}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Uses in Pharmacy
                </div>

                <div class="info-text">
                    ${drug.uses}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Medicinal Uses
                </div>

                <div class="info-text">
                    ${drug.medicinal}
                </div>

            </div>

            ${drug.toxicity ? `

            <div class="info-box">

                <div class="info-title">
                    Toxicity
                </div>

                <div class="info-text">
                    ${drug.toxicity}
                </div>

            </div>

            ` : ""}

        `;

    } else {

        infoBox.innerHTML = `

            <h2>
                No Information Available
            </h2>
        `;
    }
}
// SEARCH DRUG
function searchDrug(){

    const input =
    document.getElementById(
        "searchInput"
    ).value.toLowerCase();

    const drug =
    drugDatabase[input];

    const infoBox =
    document.getElementById(
        "drug-info"
    );

    const labelBox =
    document.getElementById(
        "label-container"
    );

    if(drug){

        labelBox.innerHTML = `

            <div class="result-card">

                <h2>
                    ${input}
                </h2>

            </div>
        `;

        infoBox.innerHTML = `

            <div class="info-box">

                <div class="info-title">
                    Hindi Name
                </div>

                <div class="info-text">
                    ${drug.hindi}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Biological Name
                </div>

                <div class="info-text">
                    ${drug.biological}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Description
                </div>

                <div class="info-text">
                    ${drug.description}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Found In
                </div>

                <div class="info-text">
                    ${drug.found}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Uses in Pharmacy
                </div>

                <div class="info-text">
                    ${drug.uses}
                </div>

            </div>

            <div class="info-box">

                <div class="info-title">
                    Medicinal Uses
                </div>

                <div class="info-text">
                    ${drug.medicinal}
                </div>

            </div>
        `;

    } else {

        labelBox.innerHTML = `

            <div class="result-card">

                <h2>
                    Drug Not Found
                </h2>

            </div>
        `;

        infoBox.innerHTML = "";
    }
}


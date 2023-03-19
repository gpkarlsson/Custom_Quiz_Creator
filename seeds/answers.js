const { Answer } = require('../models');

const filler =
    [
        { rAnswer: "Asia" },
        { rAnswer: "Alabama" },
        { rAnswer: "Wisconsin" },
        { rAnswer: "California" },
        { rAnswer: "Nevada" },
        { rAnswer: "Wyoming" }
    ];

const seedFiller = () => Answer.bulkCreate(filler);

module.exports = seedFiller;

//currently not in use
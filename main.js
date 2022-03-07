// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory function that creates new instances of P. aequor

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum,
    dna,
    // The following method chooses a random base in the specimen's array and then generates a new random base to replace it.
    mutate() {
      this.dna[Math.floor(Math.random() * 15)] = returnRandBase();
      return this.dna;
    },
    // The following method will compare the DNA of the specimen and the DNA of the specimen that is passed through this method, then will return the percentage of how much there DNA are identical.
    compareDNA(pAequorObj) {
      let identicalCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] !== pAequorObj.dna[i]) {
          continue;
        } else {
          identicalCount++;
        }
      }
      return Math.ceil((identicalCount / this.dna.length) * 100) + '%';
    },
    // Because specimen that have DNA that are at least 60% comprised of 'C' and 'G' bases are more likely to survive the following method will count how many bases of the specimen's DNA are either 'C' or 'G' then return true or false depending on what percentage of the specimen's DNA is comprised of 'C' and 'G' bases.
    willLikelySurvive() {
      let baseCG = 0;
      this.dna.forEach(base => {
        if (base === 'C' || base === 'G') {
          baseCG++;
        }
      })
      const survivalRate = Math.floor((baseCG / this.dna.length * 100));
      if (survivalRate < 60) {
        return false;
      } else {
        return true;
      }
    }
  };
}

//The following code will generate an array of 30 different instnaces of P. aequor which are likely to survive.
function pAequorSampleGenerator() {
  let pAequorSamples = [];
  let i = 1;
  do {
    const pAequor = pAequorFactory(i, mockUpStrand());
    if (pAequor.willLikelySurvive() === true) {
      pAequorSamples.push(pAequor);
    } else {
      continue;
    }
    i++;
  } while (pAequorSamples.length < 30);
  return pAequorSamples;
}

const pAequorSample1 = pAequorSampleGenerator();


console.log(pAequorSample1);
//Expected example output: 
/*
[
  {
    specimenNum: 1,
    dna: [
      'T', 'C', 'T', 'T',
      'C', 'C', 'G', 'C',
      'G', 'A', 'A', 'T',
      'G', 'C', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 2,
    dna: [
      'G', 'A', 'C', 'C',
      'A', 'C', 'C', 'C',
      'G', 'C', 'C', 'G',
      'C', 'T', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 3,
    dna: [
      'G', 'G', 'C', 'T',
      'G', 'T', 'G', 'C',
      'G', 'G', 'C', 'G',
      'G', 'G', 'C'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 4,
    dna: [
      'T', 'C', 'G', 'C',
      'G', 'G', 'G', 'G',
      'C', 'G', 'A', 'C',
      'G', 'A', 'C'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 5,
    dna: [
      'C', 'C', 'A', 'C',
      'G', 'G', 'A', 'G',
      'A', 'C', 'C', 'C',
      'C', 'T', 'A'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 6,
    dna: [
      'G', 'C', 'G', 'A',
      'C', 'A', 'C', 'G',
      'C', 'T', 'C', 'C',
      'G', 'T', 'T'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 7,
    dna: [
      'C', 'T', 'C', 'G',
      'C', 'A', 'A', 'G',
      'A', 'C', 'G', 'G',
      'G', 'A', 'T'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 8,
    dna: [
      'C', 'C', 'T', 'T',
      'C', 'G', 'G', 'T',
      'C', 'C', 'G', 'G',
      'C', 'G', 'A'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 9,
    dna: [
      'C', 'T', 'A', 'T',
      'A', 'C', 'C', 'G',
      'G', 'G', 'T', 'G',
      'G', 'G', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 10,
    dna: [
      'T', 'A', 'G', 'G',
      'C', 'G', 'C', 'A',
      'C', 'G', 'A', 'A',
      'C', 'G', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 11,
    dna: [
      'G', 'G', 'G', 'T',
      'G', 'C', 'A', 'A',
      'C', 'G', 'G', 'G',
      'G', 'G', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 12,
    dna: [
      'G', 'T', 'C', 'A',
      'C', 'G', 'G', 'T',
      'C', 'G', 'G', 'G',
      'G', 'T', 'T'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 13,
    dna: [
      'A', 'G', 'C', 'T',
      'G', 'C', 'C', 'C',
      'A', 'T', 'C', 'A',
      'G', 'A', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 14,
    dna: [
      'A', 'C', 'C', 'A',
      'T', 'A', 'C', 'G',
      'G', 'G', 'T', 'T',
      'C', 'G', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 15,
    dna: [
      'C', 'T', 'A', 'T',
      'T', 'C', 'C', 'G',
      'C', 'T', 'G', 'A',
      'G', 'C', 'C'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 16,
    dna: [
      'A', 'C', 'C', 'C',
      'G', 'T', 'C', 'T',
      'G', 'T', 'T', 'C',
      'G', 'G', 'A'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 17,
    dna: [
      'G', 'G', 'T', 'C',
      'G', 'T', 'C', 'C',
      'A', 'G', 'C', 'C',
      'G', 'A', 'T'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 18,
    dna: [
      'G', 'A', 'A', 'T',
      'G', 'G', 'C', 'C',
      'A', 'A', 'T', 'G',
      'G', 'G', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 19,
    dna: [
      'C', 'G', 'C', 'T',
      'T', 'C', 'G', 'G',
      'C', 'C', 'T', 'G',
      'G', 'A', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 20,
    dna: [
      'C', 'G', 'C', 'G',
      'T', 'T', 'C', 'T',
      'A', 'A', 'G', 'C',
      'C', 'G', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 21,
    dna: [
      'A', 'G', 'C', 'A',
      'G', 'C', 'C', 'C',
      'G', 'C', 'A', 'T',
      'C', 'C', 'T'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 22,
    dna: [
      'T', 'G', 'A', 'G',
      'G', 'T', 'A', 'A',
      'C', 'C', 'C', 'G',
      'G', 'T', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 23,
    dna: [
      'G', 'G', 'T', 'C',
      'A', 'G', 'G', 'C',
      'G', 'A', 'C', 'T',
      'C', 'G', 'C'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 24,
    dna: [
      'G', 'C', 'A', 'T',
      'G', 'G', 'C', 'T',
      'C', 'A', 'C', 'G',
      'C', 'G', 'A'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 25,
    dna: [
      'G', 'C', 'G', 'G',
      'C', 'G', 'A', 'G',
      'A', 'A', 'C', 'T',
      'A', 'A', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 26,
    dna: [
      'T', 'T', 'G', 'G',
      'G', 'C', 'A', 'C',
      'G', 'A', 'T', 'C',
      'G', 'G', 'C'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 27,
    dna: [
      'G', 'A', 'T', 'C',
      'T', 'A', 'G', 'C',
      'G', 'C', 'A', 'G',
      'G', 'C', 'A'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 28,
    dna: [
      'G', 'C', 'T', 'G',
      'C', 'G', 'C', 'A',
      'T', 'T', 'C', 'T',
      'G', 'G', 'C'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 29,
    dna: [
      'C', 'A', 'G', 'A',
      'C', 'G', 'A', 'G',
      'A', 'A', 'C', 'G',
      'G', 'G', 'A'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  },
  {
    specimenNum: 30,
    dna: [
      'G', 'G', 'G', 'A',
      'A', 'G', 'A', 'G',
      'C', 'C', 'C', 'T',
      'T', 'C', 'G'
    ],
    mutate: [Function: mutate],
    compareDNA: [Function: compareDNA],
    willLikelySurvive: [Function: willLikelySurvive]
  }
]
*/











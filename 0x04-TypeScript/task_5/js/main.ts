interface MajorCredits {
    brand: "major";
    credits: number;
  }
  
  interface MinorCredits {
    brand: "minor";
    credits: number;
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      brand: "major",
      credits: subject1.credits + subject2.credits
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      brand: "minor",
      credits: subject1.credits + subject2.credits
    };
  }
  
  // Test the functions
  const major1: MajorCredits = { brand: "major", credits: 3 };
  const major2: MajorCredits = { brand: "major", credits: 4 };
  console.log(sumMajorCredits(major1, major2));
  
  const minor1: MinorCredits = { brand: "minor", credits: 2 };
  const minor2: MinorCredits = { brand: "minor", credits: 1 };
  console.log(sumMinorCredits(minor1, minor2));
  
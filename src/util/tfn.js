'use strict';

class TFNUtility {
  constructor(isUpdatedVersion) {
    // TO DO
    // remove old & new version flag
    this.weights = [1, 4, 3, 7, 5, 8, 6, 9, 10];
    this.modulo = 11;
    this.isUpdatedVersion = isUpdatedVersion || true;
  }

  generateTempTFN() {
    const digits = this.isUpdatedVersion ? 9 : 8;
    return new Array(digits).fill(0).map(() => {
      return this.generateRandomNum(digits);
    });
  }

  generateSortedPairs(nums) {
    return this.weights
      .map((weight, index) => {
        return {
          weight: weight,
          value: nums[index],
        };
      })
      .sort((x, y) => y.weight - x.weight);
  }

  getSum(pairs) {
    return pairs.reduce((acc, cur) => acc + cur.weight * cur.value, 0);
  }

  isTFNValid(tfn) {
    const sum = this.getSum(this.generateSortedPairs(tfn));
    if (sum % this.modulo !== 0) {
      return false;
    }
    return true;
  }

  refactorTFN(tfn) {
    const pairs = this.generateSortedPairs(tfn);
    const sum = this.getSum(pairs);
    const remainder = sum % this.modulo;
    let targetPair = {};
    console.log('remainder: ', remainder);
    if (remainder === 2) {
      // the num 2 is not in the weights list, so using the smaller num (1) instead
      targetPair = pairs[pairs.length - 1];
      targetPair.value = targetPair.value - 2;
    } else {
      // for other weight, subtract the corresponding value by 1
      targetPair = pairs.find((pair) => pair.weight === remainder);
      // if targetPair.value === 0;
      // handle here
      if (targetPair.value >= 1) {
        targetPair.value = targetPair.value - 1;
      }
    }
    const reorderedPairs = new Array(tfn.length);
    pairs.forEach((pair) => {
      const index = this.weights.findIndex((weight) => weight === pair.weight);
      reorderedPairs[index] = pair;
    });
    console.log('reorder: ', reorderedPairs);
    return reorderedPairs.map((pair) => pair.value);
  }

  //generate a num between min(include) and max(exclude)
  generateRandomNum(max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  _getTFN() {
    let tfn = this.generateTempTFN();

    console.log('f: ', tfn);
    if (!this.isTFNValid(tfn)) {
      tfn = this.refactorTFN(tfn);
    }
    return +tfn.join('');
  }

  getFacadeTFN() {
    const tfn = this._getTFN();
    if (!tfn || tfn <= 0 || tfn.length !== 9) {
      console.log('>>>>>>>>>>>>>>>>>>>>');
      console.log('Wrong Number: ', tfn);
      console.log('<<<<<<<<<<<<<<<<<<<<');
    }
    return tfn;
  }
}

module.exports = new TFNUtility();

/* eslint-env mocha */
import { expect } from 'chai';
import { map, filter } from '../src';

function* naturalNumbers(n) {
  for(var i = 0; i < n; ++i) {
    yield i;
  }
}

describe('generality', () => {
  describe('map function', () => {
    it('should work with identity when only given a generator', () => {
      const countBy1 = map(naturalNumbers);

      let expected = -1;
      for(const actual of countBy1(10)) {
        expected++;
        expect(actual).to.equal(expected);
      }

      expect(expected).to.equal(9);
    });
    it('should accept valid iteratee', () => {
      const countDoubleBy2 = map(naturalNumbers, (n)=>2*n);

      let expected = -2;
      for(const actual of countDoubleBy2(10)) {
        expected+= 2;
        expect(actual).to.equal(expected);
      }

      expect(expected).to.equal(18);
    });
    it('should accept valid paramModifier', () => {
      const countHalf = map(naturalNumbers, undefined, (n) => [n/2]);

      let expected = -1;
      for(const actual of countHalf(10)) {
        expected++;
        expect(actual).to.equal(expected);
      }

      expect(expected).to.equal(4);
    });
    it('should accept both iteratee and paramModifier', () => {
      const countBy2 = map(naturalNumbers, (n)=>2*n, (n) => [n/2]);

      let expected = -2;
      for(const actual of countBy2(10)) {
        expected += 2;
        expect(actual).to.equal(expected);
      }

      expect(expected).to.equal(8);
    });
  });

  describe('filter function', () => {
    it('should filter falsy values by default', () => {
      const oneToNminus1 = filter(naturalNumbers);

      let expected = 0;
      for(const actual of oneToNminus1(10)) {
        expected++;
        expect(actual).to.equal(expected);
      }

      expect(expected).to.equal(9);
    });
    it('should filter with iteratee', () => {
      const evens = filter(naturalNumbers, (n)=>n%2==0);

      let expected = -2;
      for(const actual of evens(10)) {
        expected+=2;
        expect(actual).to.equal(expected);
      }

      expect(expected).to.equal(8);
    });
  });
});

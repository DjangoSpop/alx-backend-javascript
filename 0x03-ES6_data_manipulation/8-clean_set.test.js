import cleanSet from './8-clean_set';

describe('cleanSet', () => {
    it('should remove all strings from the set that start with the given startString', () => {
        const set = new Set(['apple', 'banana', 'avocado', 'orange']);
        const startString = 'a';
        const cleanedSet = cleanSet(set, startString);
        expect(cleanedSet.has('apple')).toBe(false);
        expect(cleanedSet.has('avocado')).toBe(false);
        expect(cleanedSet.has('banana')).toBe(true);
        expect(cleanedSet.has('orange')).toBe(true);
    });

    it('should return an empty set if all strings start with the given startString', () => {
        const set = new Set(['apple', 'avocado', 'apricot']);
        const startString = 'a';
        const cleanedSet = cleanSet(set, startString);
        expect(cleanedSet.size).toBe(0);
    });

    it('should not modify the original set', () => {
        const set = new Set(['apple', 'banana', 'avocado', 'orange']);
        const startString = 'a';
        cleanSet(set, startString);
        expect(set.has('apple')).toBe(true);
        expect(set.has('avocado')).toBe(true);
        expect(set.has('banana')).toBe(true);
        expect(set.has('orange')).toBe(true);
    });
});

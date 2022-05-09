import { arrayOne, arrayTwo, noDuplicates } from "../data/ArrayPuzzle";

describe("Remove Duplicates", () => {
    test("Can remove duplicates from provided arrays", () => {
        expect(noDuplicates(arrayOne, arrayTwo)).toEqual(["Matt Johnson", "Bart Paden", "Ryan Doss", "Jared Malcolm", "Jordan Heigle", "Tyler Viles"]);
    });

    test("Works on array with only one duplicate", () => {
        expect(noDuplicates(['1','1','1'], ['1','1','1'])).toEqual(['1']);
    });
    test("Works on arrays with no duplicates", () => {
        expect(noDuplicates(['1','2'], ['3','4'])).toEqual(['1','2','3','4']);
    })
    // typescript covers the rest im pretty sure preventing anything othan than string arrays to be entered
})
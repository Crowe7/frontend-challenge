// Takes a first array
    export let arrayOne: string[] = ["Matt Johnson", 
                                    "Matt Johnson", 
                                    "Bart Paden", 
                                    "Ryan Doss", 
                                    "Jared Malcolm"];

// And a second array 
    export let arrayTwo: string[] = ["Matt Johnson", 
                                    "Bart Paden", 
                                    "Bart Paden",
                                    "Jordan Heigle", 
                                    "Jordan Heigle", 
                                    "Tyler Viles"];

// and combines them into a Set which can not hold duplicate characters

  export function noDuplicates(arrayOne: string[], arrayTwo: string[]): string[] {
       return Array.from(new Set([...arrayOne, ...arrayTwo]))
    }

// then returns the array made from the set

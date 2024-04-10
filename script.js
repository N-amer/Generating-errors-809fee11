const functies = [
    () => {
        // TypeError
        const foo = undefined;
        foo.bar();
    },
    () => {
        // ReferenceError
        const bar = baz;
    },
    () => {
        // RangeError
        const arr = new Array(-1);
    }
];

functies.forEach((functie) => {
    try {
        functie();
    } catch (error) {
        if (error instanceof TypeError || error instanceof RangeError || error instanceof ReferenceError) {
            console.log(`Er is een error gevonden!`)
            console.log(`- ErrorType: ${error.name}`);
            console.log(`- Message: "(weggeblurd)"`);
        }
    }
});

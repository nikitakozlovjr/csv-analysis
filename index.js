const getStatistics = (content) => {
    // Считает количество валют
    const rows = content.split("\n");
    const result = rows.slice(1, rows.length - 1);
    console.log(`Count: ${result.length}`);

    // Выводит сокращенные названия валют в алфавитном порядке
    const strs = result.map((row) => row.split(";"));
    const letterCodes = strs.map((str) => str[3]).sort();
    const filters = letterCodes.reduce((acc, letterCode) => {
        if(!acc.includes(letterCode)) {
        acc.push(letterCode);
        };
        return acc;
    }, []);
    const string = filters.join(', ');
    console.log(`Currency codes: ${string}`);
};

export default getStatistics;
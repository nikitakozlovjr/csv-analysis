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

    // Выводит максимальное и минимальное значение 
    const currencys = strs.map((str) => str[4]);
    const max = currencys.reduce((acc, currency) =>
        currency > acc ? currency : acc
    );
    const min = currencys.reduce((acc, currency) =>
        currency < acc ? currency : acc
    );
    console.log(`Cost of currency: Min: ${min}, Max: ${max}`);

    // Выводит на экран количество валют, стоимость которых лежит в диапозоне от 10 до 30 (включительно) 
    const filt = currencys.filter((currency) => currency <= 30 && currency >= 10).length;
    console.log(`Count currency between 10 and 30: ${filt}`);

    // Считает среднеарифметическое для валют USD, EUR, CHF, округляя в меньшую сторону и выводит на экран
    const dataCurrency = result
        .map((item) => item.split(';'))
        .reduce((acc, item) => {
            if(item[3] === 'USD' || item[3] === 'EUR' || item[3] === 'CHF') {
                acc.value += Number(item[4]);
                acc.count += 1;
            };

            return acc;
        }, {value: 0, count: 0});
        
    const result5 = Math.floor(dataCurrency.value / dataCurrency.count);
    console.log(`Arithmetic mean for USD, EUR, CHF is ${result5}`);
};

export default getStatistics;
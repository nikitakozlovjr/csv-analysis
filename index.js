const getStatistics = (content) => {
    // Считает количество валют
    const rows = content.split("\n");
    const result = rows.slice(1, rows.length - 1);
    console.log(`Count: ${result.length}`);

};

export default getStatistics;
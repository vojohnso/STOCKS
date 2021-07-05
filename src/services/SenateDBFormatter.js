// Function used to grab an array of all senators
export const organizeBySenator = data => {
    const senatorKey = []; 
    for (var i in data) {
        senatorKey.push(data[i].senator);
    }
    const senatorArr = senatorKey.filter((item, i, ar) => ar.indexOf(item) === i);
    //console.log(senatorArr);
    return (senatorArr);
}
// Function used to grab an array of all tickers
export const organizeByTicker = data => {
    const tickerKey = [];
    for (var i in data) {
        tickerKey.push(data[i].ticker);
    }
    const tickerArr = tickerKey.filter((item, i , ar) => ar.indexOf(item) === i);
    return (tickerArr);
}

// Function used to grab an array of all tickers
export const organizeByDays = data => {
    const dayKey = [];
    for (var i in data) {
        dayKey.push(data[i].transaction_date);
    }
    const dayArr = dayKey.filter((item, i , ar) => ar.indexOf(item) === i);
    return (dayArr);
}

export const getSenatorDetails = senatorName => {
    return fetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
    .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } return res.json();
    })
    .then(res => {
        const senatorList = [];
        for (var i in res) {
            if (res[i].senator === senatorName) {
                senatorList.push(res[i]);
            }
        }
        //console.log(senatorList);
        return senatorList; 
    })
    .catch((res) => {
      console.log(res)
    });

}



//HELPER FUNCTIONS

export const avgTradeVolume = (amount) => {
    var first = 0;
    var second = 0;
    var result = 0;
    const words = amount.split(' ');
	first = words[0].substr(1);
    second = words[2].substr(1);
    var new_first = first.replaceAll(",", "");
    var new_second = second.replaceAll(",", "");
    new_first = +new_first;
    new_second = +new_second;
    result = (new_first + new_second)/2;
	return result;
}

export const sortObjValues = (data) => {
    const sortable = Object.fromEntries(
        Object.entries(data).sort(([,a],[,b]) => b-a)
    );
    return sortable;
}

//CARD FUNCTIONS

export const grabPastThirtyDays = () => {
    return fetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
    .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } return res.json();
    })
    .then(res => {
        const sortedList = res.sort(function(a,b) {
            return new Date(b.transaction_date) - new Date(a.transaction_date)
        })
        const transactionList = [];
        let count = 0; //count is the number of dates we want(i.e if we want 30 days, we need count to go up to 30)
        let i = 0;
        const dayList = [];
        while (true) {
            if (!dayList.includes(sortedList[i].transaction_date)) {
                count = count + 1;
            }
            if (count > 7) {
                break;
            }
            transactionList.push(sortedList[i])
            dayList.push(sortedList[i].transaction_date)
            i = i + 1;
        }
        
        return transactionList;
    })
    .catch((res) => {
      console.log(res)
    });

}

export const numberOfSenators = (transactionList) => {
    let count = 0;
    const senatorList = [];
    for (var i in transactionList) {
        if (!senatorList.includes(transactionList[i].senator)) {
            count = count + 1;
        }
        senatorList.push(transactionList[i].senator) 
    }
    return count;
}

export const topTickers = (transactionList) => {
    const tickerList = [];
    const tradeList = [];
    let topList = {};
    for (var i in transactionList) {
        tradeList.push(avgTradeVolume(transactionList[i].amount))
        if (!tickerList.includes(transactionList[i].ticker)) {
            topList[transactionList[i].ticker] = tradeList[i];
        } else {
            topList[transactionList[i].ticker] = topList[transactionList[i].ticker] + tradeList[i];
        }
        tickerList.push(transactionList[i].ticker)
    }
    topList = sortObjValues(topList);
    return Object.entries(topList).slice(0,10);
}

export const totalTradeVol = (transactionList) => {
    let total = 0;
    for (var i in transactionList) {
        total = total + avgTradeVolume(transactionList[i].amount);
    }
    return total;
}
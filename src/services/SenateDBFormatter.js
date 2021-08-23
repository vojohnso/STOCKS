// Function used to grab an array of all senators
export const organizeBySenator = data => {
    const senatorKey = []; 
    for (var i in data) {
        const senatorName = data[i].first_name + " " + data[i].last_name
        senatorKey.push(senatorName);
    }
    const senatorArr = senatorKey.filter((item, i, ar) => ar.indexOf(item) === i);
    //console.log(senatorArr);
    return (senatorArr);
}

 export const getSenatorID = (dataName) => {
     return fetch('https://theunitedstates.io/congress-legislators/legislators-current.json')
     .then(res => {
         if (!res.ok) {
             throw Error('could not fetch the data for that resource');
           } return res.json();
     })
     .then(data => {
         const senatorIDKey = {};
          for (var i in data) {
              const senatorName = "";
              const name = data[i].name.official_full;
              if (name != undefined) {
                const senatorName = name.replace('.', "");
                for (var j in dataName) {
                    if (senatorName == dataName[j]) {
                        senatorIDKey[senatorName] = data[i].id.bioguide;
                    }
                }
              }
              
            //   console.log(senatorName)
            //   if (data.name.middle) {
            //       dataName = data[i].first + " " + data[i].middle + " " + data[i].last;
            //   } else {
            //     dataName = data[i].first + " " + " " + data[i].last;;
            //   }
            // console.log(dataName);
            // console.log(senatorName)
        }
        //const senatorIDArr = senatorIDKey.filter((item, i , ar) => ar.indexOf(item) === i);
        return (senatorIDKey);
    })
    .catch((res) => {
        console.log(res)
      });
 }

// Function used to grab an array of all tickers
export const organizeByTicker = data => {
    const tickerKey = [];
    for (var i in data) {
        if (data[i].name == null) {
            //console.log("YAY!")
            data[i].name = data[i].ticker;
        }
        tickerKey.push(data[i]);
    }
    return (tickerKey);
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

export const getSummaryDetails = () => {
    return fetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions_for_senators.json')
    .then(res => {
        if (!res.ok) {
            throw Error('could not fetch the data for that resource');
          } return res.json();
    })
    .then(res => {
        const senatorData = organizeBySenator(res);
        //console.log(senatorData)
        return senatorData;
    })
    .catch((res) => {
        console.log(res)
      });
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

export const getTickerDetails = tickerName => {
    return fetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_ticker_transactions.json')
    .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } return res.json();
    })
    .then(res => {
        const tickerList = [];
        for (var i in res) {
            if (res[i].ticker === tickerName) {
                tickerList.push(res[i]);
            }
        }
        console.log(tickerList[0]);
        return tickerList[0]; 
    })
    .catch((res) => {
      console.log(res)
    });

}

export const getDayDetails = date => {
    return fetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
    .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } return res.json();
    })
    .then(res => {
        const dateList = [];
        for (var i in res) {
            if (res[i].transaction_date === date) {
                dateList.push(res[i]);
            }
        }
        console.log(dateList);
        return dateList; 
    })
    .catch((res) => {
      console.log(res)
    });

}



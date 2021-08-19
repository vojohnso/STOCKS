import axios from 'axios';

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

// export const getSenatorID = () => {
//     return fetch('https://theunitedstates.io/congress-legislators/legislators-current.json')
//     .then(res => {
//         if (!res.ok) {
//             throw Error('could not fetch the data for that resource');
//           } return res.json();
//     })
//     .then(data => {
//         const senatorIDKey = {};
//         for (var i in data) {
//             const senatorName = data[i].name.first + " " + data[i].name.last;
//             //console.log(dataName);
//             // if (data.name.middle) {
//             //     dataName = data[i].first + " " + data[i].middle + " " + data[i].last;
//             // } else {
                
//             // }
//             // console.log(dataName);
//             // console.log(senatorName)
//             // if (senatorName == dataName) {
//                 //console.log(data[i].id.bioguide)
//                 // return data[i].id.bioguide;
//             //} 
//             // senatorIDKey.push(data[i].id.bioguide);
//             senatorIDKey[senatorName] = data[i].id.bioguide;
//         }
//         // const senatorIDArr = senatorIDKey.filter((item, i , ar) => ar.indexOf(item) === i);
//         // console.log(senatorIDKey);
//         return (senatorIDKey);
//     })
//     .catch((res) => {
//         console.log(res)
//       });
// }



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
        const buttonPopUpList = [];
        const returnList = [];
        for (var i in res) {
            if (res[i].senator === senatorName) {
                senatorList.push(res[i]);
                buttonPopUpList.push(false);
            }
        }
        //console.log(senatorList);
        returnList.push(senatorList);
        returnList.push(buttonPopUpList);
        console.log(returnList);
        return returnList; 
    })
    .catch((res) => {
      console.log(res)
    });

}




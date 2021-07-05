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



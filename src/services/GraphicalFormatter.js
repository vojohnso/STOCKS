export const numberOfTransactions = () => {
    return fetch('https://senate-stock-watcher-data.s3-us-west-2.amazonaws.com/aggregate/all_transactions.json')
    .then(res => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        } return res.json();
    })
    .then(res => {
        const transactionList = res.sort(function(a,b) {
            return new Date(b.transaction_date) - new Date(a.transaction_date)
        })
        return transactionList;
    })
    .catch((res) => {
      console.log(res)
    });

}
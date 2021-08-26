import React from 'react'
const TopTickersCard = ({topTickers}) => {
    const tickerList = [];
    const amountList = [];
    for (var ticker in topTickers) {
        tickerList.push(ticker[0])
        amountList.push(ticker[1])
    }
    console.log(topTickers);
    return (
            <div className="relative flex flex-col min-w-0 break-words bg-gray-100 w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                <h2 className="text-2xl font-bold pb-2 text-gray-800">Top 10 Tickers</h2>
                    <div className="block-w-full overflow-y-auto h-32">
                        <table className="items-center w-full bg-transparent border-collaspe">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 text-xs uppercase border-l-0 
                                     whitespace-nowrap font-semibold text-left">Ticker Symbol</th>
                                    <th className="px-6 py-3 text-xs uppercase border-l-0 
                                    border-r-0 whitespace-nowrap font-semibold text-left">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {topTickers && topTickers.map((ticker, i) => (
                                <tr key={i}>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 
                                    whitespace-nowrap p-4 text-left">
                                        <p className="text-md text-gray-600 font-medium">{ticker[0]}</p>
                                    </th>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 
                                    whitespace-nowrap p-4 text-left">
                                        <p className="text-md text-gray-600 font-medium">${ticker[1]}</p>
                                    </th>
                                </tr>
                                ))}
                            </tbody>
                        </table>

                        </div>
            <div className="mt-4">
                <span className="text-sm text-gray-600">Based on the past </span>
                <span className="text-red-500 font-bold">7 </span>
                <span className="text-sm text-gray-600">days</span>
            </div>  
            </div>
        </div>
    )
}

export default TopTickersCard
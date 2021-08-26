import React from 'react'
const NumTransactionsCard = ({numTransactions}) => {
    return (
        <div className="bg-gray-100 w-72 p-6 rounded-lg shadow-lg mb-2">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">Number of Transactions</h2>
            <p className="text-md text-gray-600 font-medium">{numTransactions}</p>
            <div class="mt-4">
                <span class="text-sm text-gray-600">Based on the past </span>
                <span class="text-red-500 font-bold">7 </span>
                <span class="text-sm text-gray-600">days</span>
            </div>  
        </div>
    )
}

export default NumTransactionsCard
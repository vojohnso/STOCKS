import React from 'react'
const NumSenatorsCard = ({numSenators}) => {
    return (
        <div className="bg-gray-100 p-6 w-72 rounded-lg shadow-lg mb-2">
            <h2 className="text-2xl font-bold pb-8 text-gray-800">Senators Reporting</h2>
            <p className="text-md text-gray-600 font-medium">{numSenators}</p>
            <div class="mt-4">
                <span className="text-sm text-gray-600">Based on the past </span>
                <span className="text-red-500 font-bold">7 </span>
                <span className="text-sm text-gray-600">days</span>
            </div>  
        </div>
    )
}

export default NumSenatorsCard
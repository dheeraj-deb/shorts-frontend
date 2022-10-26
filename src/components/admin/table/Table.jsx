import React from 'react'
import {Reorder} from 'framer-motion'

function Table() {
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">React real-time animated ranking table for Cryptocurrencies</h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <Reorder.Group values={1} onReorder={1}>
                            <table className="min-w-full leading-normal">
                                <thead>
                                    <tr>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Cryptocurrency
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Price
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Market Cap
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Total Volume
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Price Change 24h
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Price Percentage 24h
                                        </th>
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Price Trend
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {cryptoData.map(cryptocurrency => */}
                                        <Reorder.Item as='tr' key={1} value={1}>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <div className="flex">
                                                    <div className="flex-shrink-0 w-10 h-10">
                                                        <img
                                                            className="w-full h-full rounded-full"
                                                            src="http:"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-3">
                                                        <p className="text-gray-900 whitespace-no-wrap">
                                                            hai
                                                        </p>
                                                        <p className="text-gray-600 whitespace-no-wrap">hai</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-900 whitespace-no-wrap">$hai</p>
                                                <p className="text-gray-600 whitespace-no-wrap">USD</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-600 whitespace-no-wrap">hai</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-600 whitespace-no-wrap">hai</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-600 whitespace-no-wrap">hai</p>
                                            </td>
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className="text-gray-600 whitespace-no-wrap">hai</p>
                                            </td>
                                            { 1 > 0 ?
                                                (<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                                                    >
                                                        <span
                                                            aria-hidden
                                                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                        ></span>
                                                        <span className="relative">Upward Trend</span>
                                                    </span>
                                                </td>)
                                                :
                                                (<td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight"
                                                    >
                                                        <span
                                                            aria-hidden
                                                            className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                                        ></span>
                                                        <span className="relative">Downward Trend</span>
                                                    </span>
                                                </td>
                                                )}
                                        </Reorder.Item>
                                    {/* )} */}
                                </tbody>
                            </table>
                        </Reorder.Group>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
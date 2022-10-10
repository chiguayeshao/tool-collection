import React, { useState } from 'react'
import ShowTable from './ShowTable/ShowTable'

const FibCalculator = () => {
    const [resistancePriceValue, setResistancePriceValue] = useState(0)
    const [currentPriceValue, setCurrentPriceValue] = useState(0)
    const [supportPriceValue, setSupportPriceValue] = useState(0)

    const changeResistancePrice = (event) => {
        setResistancePriceValue(event.target.value)
    }
    const changeCurrentPrice = (event) => {
        setCurrentPriceValue(event.target.value)
    }
    const changeSupportPrice = (event) => {
        setSupportPriceValue(event.target.value)
    }

    const calFib = () => {}

    const columns = [
        {
            title: '止盈斐波那契序列',
            dataIndex: 'fibSequence',
            key: 'fibSequence',
        },
        {
            title: '对应价格',
            dataIndex: 'targetPrice',
            key: 'targetPrice',
        },
    ]
    const takeProfitDataSource = [
        {
            key: '1',
            fibSequence: '0(阻力价)',
            targetPrice:
                Number(currentPriceValue) +
                (Number(resistancePriceValue) - Number(currentPriceValue)) *
                    (1 - 0),
        },
        {
            key: '2',
            fibSequence: '0.236',
            targetPrice:
                Number(currentPriceValue) +
                (Number(resistancePriceValue) - Number(currentPriceValue)) *
                    (1 - 0.236),
        },
        {
            key: '3',
            fibSequence: '0.382',
            targetPrice:
                Number(currentPriceValue) +
                (Number(resistancePriceValue) - Number(currentPriceValue)) *
                    (1 - 0.382),
        },
        {
            key: '4',
            fibSequence: '0.5',
            targetPrice:
                Number(currentPriceValue) +
                (Number(resistancePriceValue) - Number(currentPriceValue)) *
                    (1 - 0.5),
        },
        {
            key: '5',
            fibSequence: '0.618',
            targetPrice:
                Number(currentPriceValue) +
                (Number(resistancePriceValue) - Number(currentPriceValue)) *
                    (1 - 0.618),
        },
        {
            key: '6',
            fibSequence: '0.65',
            targetPrice:
                Number(currentPriceValue) +
                (Number(resistancePriceValue) - Number(currentPriceValue)) *
                    (1 - 0.65),
        },
        {
            key: '7',
            fibSequence: '0.786',
            targetPrice:
                Number(currentPriceValue) +
                (Number(resistancePriceValue) - Number(currentPriceValue)) *
                    (1 - 0.7),
        },
        {
            key: '8',
            fibSequence: '1(开仓价)',
            targetPrice:
                Number(currentPriceValue) +
                (Number(resistancePriceValue) - Number(currentPriceValue)) *
                    (1 - 1),
        },
    ]

    const stopLossDataSource = [
        {
            key: '1',
            fibSequence: '1(开仓价)',
            targetPrice: 32,
        },
        {
            key: '2',
            fibSequence: '0.786',
            targetPrice: 42,
        },
        {
            key: '3',
            fibSequence: '0.65',
            targetPrice: 32,
        },
        {
            key: '4',
            fibSequence: '0.618',
            targetPrice: 32,
        },
        {
            key: '5',
            fibSequence: '0.5',
            targetPrice: 32,
        },
        {
            key: '6',
            fibSequence: '0.382',
            targetPrice: 32,
        },
        {
            key: '7',
            fibSequence: '0.236',
            targetPrice: 32,
        },
        {
            key: '8',
            fibSequence: '0(支撑价)',
            targetPrice: 32,
        },
    ]

    return (
        <div>
            <h1 className="text-3xl font-bold underline">斐波那契计算器</h1>
            <div>
                <form className="w-full max-w-sm">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name"
                            >
                                阻力价格
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name"
                                type="number"
                                value={resistancePriceValue}
                                onChange={changeResistancePrice}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name"
                            >
                                开仓价格
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name"
                                type="number"
                                value={currentPriceValue}
                                onChange={changeCurrentPrice}
                            />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label
                                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name"
                            >
                                支撑价格
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input
                                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                id="inline-full-name"
                                type="number"
                                value={supportPriceValue}
                                onChange={changeSupportPrice}
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-row">
                <div>
                    <ShowTable
                        columns={columns}
                        dataSource={takeProfitDataSource}
                        title={'阻力价~开仓价'}
                    />
                </div>
                <div>
                    <ShowTable
                        columns={columns}
                        dataSource={stopLossDataSource}
                        title={'开仓价~支撑价'}
                    />
                </div>
            </div>
        </div>
    )
}

export default FibCalculator

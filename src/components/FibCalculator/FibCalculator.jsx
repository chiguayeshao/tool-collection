import React, { useState } from 'react'
import ShowTable from './ShowTable/ShowTable'

const FibCalculator = () => {
    const [resistancePriceValue, setResistancePriceValue] = useState()
    const [currentPriceValue, setCurrentPriceValue] = useState()
    const [supportPriceValue, setSupportPriceValue] = useState()

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
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '对应价格',
            dataIndex: 'age',
            key: 'age',
        },
    ]
    const dataSource = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
        },
    ]

    return (
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
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={calFib}
                        >
                            计算
                        </button>
                    </div>
                </div>
            </form>
            <ShowTable columns={columns} dataSource={dataSource} />
        </div>
    )
}

export default FibCalculator

import { Table } from 'antd'
import React from 'react'

const ShowTable = (props) => {
    const { columns, dataSource } = props
    return (
        <div>
            <h1 className="text-2xl font-bold underline">阻力价~开仓价</h1>
            <Table columns={columns} dataSource={dataSource} />
            <h1 className="text-2xl font-bold underline">开仓价~支撑价</h1>
            <Table columns={columns} dataSource={dataSource} />
        </div>
    )
}

export default ShowTable

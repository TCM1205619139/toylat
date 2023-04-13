import React from 'react'

import "./Table.scss"

type TableState = {}

type TableProps = {
  columns: ColumnsType<any>
  dataSource: any[],
  size: 'large' | 'middle' | 'small'
}

export type ColumnsType<T> = ({
  title: string,
  dataIndex: string,
  key: string,
  width?: string,
  render?: (value: any, row: T, index: number) => React.ReactNode
} & Partial<T>)[]


const TableHeader = (props: { columns: ColumnsType<unknown> }) => {
  const { columns } = props

  return (
    <thead>
      <tr>
        {
          columns.map((column, key) => {
            return (
              <th key={key}>
                <div className="table-cell">{column.title}</div>
              </th>
            )
          })
        }
      </tr>
    </thead>
  )
}

const TableBody = (props: { columns: ColumnsType<unknown>, dataSource: any[] }) => {
  const { columns, dataSource } = props
  return (
    <tbody>
      {
        dataSource.map((data, key) => {
          return (
            <tr key={key}>
              {
                columns.map((column, index) => {
                  return (
                    <td key={index}>
                        {
                          column.render
                            ? column.render(data[column.key], data, index)
                            : <div className="table-cell">{data[column.key]}</div>
                        }
                    </td>
                  )
                })
              }
            </tr>
          )
        })
      }
    </tbody>
  )
}

class Table extends React.Component<TableProps, TableState> {
  constructor (props: TableProps) {
    super(props);
    this.state = {}
  }

  render () {
    const { columns, dataSource } = this.props

    return (
      <table className="table-container">
        <TableHeader columns={columns}></TableHeader>
        <TableBody columns={columns} dataSource={dataSource}></TableBody>
      </table>
    )
  }

  get gridRowStyle () {
    return {
      gridTemplateColumns: this.props.columns.map(col => col.width).join(' '),
    }
  }
}

export default Table
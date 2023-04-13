import React from 'react';

import { Table, ColumnsType, Button } from '@/components/ui'

import { ProxyConfigItem } from "@/modules/background/RequestProxy";

enum Status {
  Pause = '已暂停',
  Running = '运行中'
}

enum StatusColor {
  '已暂停' = 'volcano',
  '运行中' = 'green'
}

enum ActionLabel {
  Pause = '暂停',
  Running = '运行'
}

type Action = {
  label?: ActionLabel,
  value?: string,
  disabled?: boolean,
  icon?: React.ReactElement,
  handler?: (action: Action, row: DataType) => void
}

// interface DataType {
//   name: string;
//   status: Status;
//   config: Maybe<ProxyConfigItem & { name: string }>;
//   actions: Action[]
// }
type DataType = {
  name: string,
  actions?: Action[],
} & Maybe<Partial<ProxyConfigItem>>

const columns: ColumnsType<any> = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
    width: '90px',
    render: (_, { name }) => <div>{name}</div>
  },
  {
    title: '目标地址',
    dataIndex: 'target',
    key: 'target'
  },
  {
    title: '操作',
    dataIndex: 'actions',
    key: 'actions',
    render: (_: Action[], row: DataType) => {
      if (!_) return
      return _.map((action: Action, index: number) => {
        return <Button key={index} size="small" type="link">{action?.label}</Button>
      })
    }
  }
]

const data: DataType[] = [
  {
    name: '名称一',
    target: 'https://127.0.0.1:8082',
    actions: [
      {
        disabled: false,
        label: ActionLabel.Running,
        value: ActionLabel.Running
      }
    ],
  },
  {
    name: '名称二',
    target: 'http://localhost:8080',
  }
]

const ProxyStatusTable: React.FC = (props: any) => {
  return (
    <Table
      size="small"
      columns={columns}
      dataSource={data}
    />
  )
}

export default ProxyStatusTable
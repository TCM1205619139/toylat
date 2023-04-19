import React from 'react'
import { Modal } from "@/components/ui";
import { ProxyTable } from "@/index-db/proxy";

type Props = {
  visible: boolean
  onOk: () => void
  onCancel: () => void
  config?: ProxyTable
}

const ConfigModal: React.FC<Props> = (props) => {
  const title = !props.config
    ? '新增配置'
    : Object.keys(props.config || {}).length === 0
      ? '新增配置'
      : '编辑配置'

  const onOk = () => {
    props.onOk()
  }

  const onCancel = () => {
    props.onCancel()
  }

  return (
    <Modal
      visible={props.visible}
      title={title}
      onOk={onOk}
      onCancel={onCancel}
    >
      <div style={{height: '200px', overflow: 'auto'}}><p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>
        <p>Some Content</p>

      </div>
    </Modal>
  )
}


export default ConfigModal
import React from 'react'
import { ProxyConfigItem } from "@/modules/background/RequestProxy";

type Props = {
  visible: boolean
  onOk: () => void
  onCancel: () => void
  config?: ProxyConfigItem
}

type State = {
  form: Partial<ProxyConfigItem>
}

const makeSelect = (list: string[]) => {
  if (list.length === 0) return null
  return (
    <div></div>
  )
}

class ConfigModal extends React.Component<Props, State> {

  constructor (props: any) {
    super(props);
    this.state = {
      form: {}
    }
  }

  render() {
    const protocol = makeSelect([' http://', 'https://'])
    const port = makeSelect(['8080', '8000'])

    return (
      <div></div>
    )
  }

  get title() {
    if (!this.props.config) return '新增配置'
    return Object.keys(this.props.config).length === 0
      ? '新增配置'
      : '编辑配置'
  }

  onOk() {
    this.setState({
      form: {}
    })
  }

  onCancel() {
    this.setState({
      form: {}
    })
  }
}

export default ConfigModal
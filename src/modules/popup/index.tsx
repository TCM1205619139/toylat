import React from 'react'
import ReactDom from 'react-dom/client'
import "normalize.css"

import './index.scss'
import { Button } from '@/components/ui'
import ProxyStatusTable from "@/modules/popup/components/ProxyStatusTable";
import ConfigModal from "@/modules/popup/components/ConfigModal";

type State = {
  visible: boolean
}

class App extends React.Component<{}, State> {
  state = {
    visible: false
  }
  constructor (props: any) {
    super(props);
  }
  render() {
    const { visible } = this.state

    return (
      <div className="app">
        <header>
          <Button size="small" type="primary">新增配置</Button>
          <ConfigModal
            visible={visible}
            onOk={this.onConfigModalOk.bind(this)}
            onCancel={this.onConfigModalCancel.bind(this)}
          />
        </header>
        <ProxyStatusTable></ProxyStatusTable>
      </div>
    )
  }

  openAddConfigModal() {
    this.setState({
      visible: true
    })
  }

  onConfigModalOk() {
    this.setState({
      visible: false
    })
  }

  onConfigModalCancel() {
    this.setState({
      visible: false
    })
  }
}

ReactDom.createRoot(
  document.getElementById('app') as Element
).render(<App/>)
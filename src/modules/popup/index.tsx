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
    visible: false,
    tableData: []
  }
  constructor (props: any) {
    super(props);
  }
  render() {
    const { visible, tableData } = this.state

    return (
      <div className="app">
        <header>
          <Button size="small" type="primary" onClick={this.addNewProxyConfig.bind(this)}>新增配置</Button>
          <Button type="primary" size="small">保存</Button>
          <ConfigModal
            visible={visible}
            onOk={this.onConfigModalOk.bind(this)}
            onCancel={this.onConfigModalCancel.bind(this)}
          />
        </header>
        <section className="table-container">
          <ProxyStatusTable tableData={tableData}></ProxyStatusTable>
        </section>
      </div>
    )
  }

  addNewProxyConfig() {
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
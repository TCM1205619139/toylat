import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui'
import "./Modal.scss"
import XLG from '!!raw-loader!../icon/x-lg.svg'

type ModalProps = {
  visible: boolean
  children?: JSX.Element | JSX.Element[],
  footer?: JSX.Element,
  header?: JSX.Element,
  zIndex?: number,
  title?: string,
  style?: CSSStyleDeclaration,
  width?: number | string,
  mask?: boolean,
  onCancel?: Function,
  onOk?: Function
}

type ModalState = {}

const Footer: React.FC<{
  handleClose: Function,
  handleOk: Function
}> = (props) => {

  return <section className="modal-footer">
    <Button type="primary" size="small" onClick={props.handleOk}>确定</Button>
    <Button type="default" size="small" onClick={props.handleClose}>取消</Button>
  </section>
}

const Header: React.FC<{
  title?: string
}> = (props) => {
  return <section className="modal-header">
    { props.title || '标题' }
  </section>
}

const Modal:React.FC<ModalProps> = (props) => {
  const {
    zIndex = 1000,
    width = 270,
    children = '',
    title,
    mask = true,
    visible,
    onCancel,
    onOk,
    style = {},
  } = props
  const dialogStyle = {
    zIndex,
    width: typeof width === 'number' ? width + 'px' : width,
    ...style
  }
  const [isHidden, setHidden] = useState(!visible)

  useEffect(() => {
    setHidden(visible)
  }, [visible])
  

  const hiddenModal = (cb: Function) => {
    setHidden(() => {
      cb && cb()
      return false
    })
  }

  const stopPropagation = (evt: any) => {
    evt.stopPropagation()
  }

  const handleClose = () => {
    console.log('close')
    hiddenModal(
      typeof onCancel === 'function' ? onCancel : () => {}
    )
  }

  const handleOk = () => {
    console.log('ok')
    hiddenModal(
      typeof onOk === 'function' ? onOk : () => {}
    )
  }

  const toggle = () => {
    setHidden(vi => !vi)
  }

  const closeModal = (evt: any) => {
    if (evt && evt.keyCode === 27) {
      handleClose()
    }
  }

  return (
    <div className="modal-root">
      { mask && isHidden && <div className="modal-mask"></div> }
      <div
        className="modal-wrapper"
        style={{ display: isHidden ? 'block' : 'none' }}
        onClick={ handleClose }
      >
        <div className="modal-dialog" style={dialogStyle} onClick={stopPropagation}>
          <Button
            className="close-icon"
            size="small"
            svgString={XLG}
            onClick={ handleClose }
          />
          { props.header || <Header title={title}/> }
          <div className="modal-content">
            { children }
          </div>
          { props.footer || <Footer handleClose={handleClose} handleOk={handleOk}/> }
        </div>
      </div>
    </div>
  )

  // const handleOk = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const { onOk } = props
  // }
  //
  // const handleCancel = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   const { onCancel } = props
  // }
}

export default Modal
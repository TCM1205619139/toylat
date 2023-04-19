import React from 'react'
import './Button.scss'

type ButtonProps = {
  disabled: boolean
  type: 'primary' | 'default' | 'dashed' | 'link',
  size: 'large' | 'middle' | 'small',
  icon: JSX.Element,
  children: React.ReactNode,
  className?: string,
  svgString?: string,
  [key: string]: any
}

class Button extends React.Component<Partial<ButtonProps>, {}> {
  render () {
    const {
      children,
      disabled,
      onClick,
      className = '',
      svgString = ''
    } = this.props
    return (
      <div className={`${className} button`}>
        <button
          className={this.styleClass.join(' ')}
          type="button"
          disabled={disabled}
          onClick={onClick}
        >
          <div >
            <div className="icon" dangerouslySetInnerHTML={{__html: svgString}}/>
            <span>{children}</span>
          </div>
        </button>
      </div>
    )
  }

  get styleClass() {
    const { type = 'default', size = 'large' } = this.props

    return [`button-${type}`, `button-${size}`]
  }
}

export default Button
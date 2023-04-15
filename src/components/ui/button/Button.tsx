import React from 'react'
import './Button.scss'

type ButtonProps = {
  disabled: boolean
  type: 'primary' | 'default' | 'dashed' | 'link',
  size: 'large' | 'middle' | 'small',
  icon: string,
  children: React.ReactNode,
  onClick: () => void
}

class Button extends React.Component<Partial<ButtonProps>, {}> {
  constructor (props: ButtonProps) {
    super(props);
  }
  render () {
    const { children, disabled, onClick } = this.props
    return (
      <div className="button">
        <button
          className={this.styleClass.join(' ')}
          type="button"
          disabled={disabled}
          onClick={onClick}
        >
          <span>{children}</span>
        </button>
      </div>
    )
  }

  get styleClass() {
    const { type = 'default', size = 'large', icon } = this.props

    return [`button-${type}`, `button-${size}`]
  }
}

export default Button
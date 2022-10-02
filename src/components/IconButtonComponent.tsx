import React from 'react'
import styled, { Interpolation } from 'styled-components'
import { colors } from '../constants/colors'

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  label: string
  icon?: React.ReactElement
  customStyles?: Interpolation<React.CSSProperties>
}

const StyledIconButtonLayout = styled.div<IconButtonProps>`
    padding-bottom: 10px;
    .custom-icon-button {
        min-width: 110px;
        margin-left: 15px;
        padding: 10px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;
        background-color: ${colors.white};
        border: 1px solid ${colors.blackhole};
        ${({ customStyles }) => customStyles}
    }
    .custom-icon-button:hover {
        background-color: ${colors.lightGrey};
    }
    .custom-icon-button.active {
        background-color: ${colors.lightGrey};
    }

    .icon {
        margin-left: 0px;
        width: 20px;
        height: 20px;
    }

    .label {
        padding-left: 10px;
        height: 50px;
        vertical-align: super;
        font-weight: bold;
    }
`

const IconButton = React.forwardRef<HTMLDivElement, IconButtonProps>((props, ref) => {
  const { customStyles, label, icon, className, ...rest } = props
  const resolvedClassName = [
    'custom-icon-button',
    className
  ].join(' ').trimEnd()
  return (
    <StyledIconButtonLayout icon={icon} label={label} customStyles={customStyles} ref={ref} {...rest}>
        <button className={resolvedClassName}>
            <span className="icon">{icon}</span>
            <span className="label">{label}</span>
        </button>
     </StyledIconButtonLayout>
  )
})

export default IconButton

IconButton.defaultProps = {
  label: '',
  customStyles: {}
}

import React from 'react'
import styled from 'styled-components'

interface IProps {
  children: React.ReactNode
  color?: string
  fontSize?: any
}

export const AppFooterWrapper: React.FC<IProps> = styled.div`
  color: blue;
  font-size: ${(props) => {
    return props.fontSize
  }}px;
`

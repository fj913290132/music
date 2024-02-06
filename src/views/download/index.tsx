import React, { memo } from 'react'

interface IProps {
  children?: React.ReactNode
}

const Download: React.FC<IProps> = (props) => {
  console.log(props.children)

  return <div></div>
}

Download.defaultProps = {}

export default memo(Download)

import styled from 'styled-components'

interface IProps {
  children?: React.ReactNode
  height?: string
  color?: string
  className?: string
}

export const NacBarWrapper: React.FC<IProps> = styled.div`
  height: ${(props) => props.height}px;
  background-color: ${(props) => {
    //console.log(props)
    return props.theme.color.primary
  }};

  .nav {
    display: flex;
    padding-left: 180px;
    position: relative;
    top: -4px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        color: #fff;
        font-size: 12px;

        &:hover,
        &.active {
          text-decoration: none;
          background-color: #9b0909;
          border-radius: 20px;
        }
      }
    }
  }
`

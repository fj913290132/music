import styled from 'styled-components'

export const RecommendWrapper = styled.div`
  > .content {
    display: flex;
    border: 1px solid #d3d3d3;
    width: 980px;
    background-image: url(${require('@/assets/img/wrap-bg.png')});
  }
  .left {
    box-sizing: border-box;
    padding: 20px;
    width: 729px;
  }
  .right {
    margin-left: 1px;
    width: 250px;
  }
`

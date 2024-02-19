import styled from 'styled-components'

export const UserLoginWarpper = styled.div`
  width: 100%;
  height: 126px;
  background-position: 0 0 !important;
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  p {
    line-height: 25px;
  }
  a {
    margin-top: 10px;
    display: block;
    width: 100px;
    height: 31px;
    text-align: center;
    color: #fff;
    background-color: #c53030;
    text-decoration: none;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;
    line-height: 31px;
    &:hover {
      background-position: -110px -195px;
    }
  }
`

import React from 'react'
import styled from 'styled-components'
import { space, width, fontSize, color } from 'styled-system'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

// Add styled-system functions to your component
const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

export default () => <Box color='tomato' bg="tomato" width="300" p={3}/>


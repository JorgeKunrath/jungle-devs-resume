import styled, { keyframes } from 'styled-components'

const grow = keyframes`
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
`

const ProgressBar = styled.div`
  height: 8px;
  position: relative;
  background-color: #eeeeee;
  border-radius: 3px;
  overflow: hidden;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #cccccc;
    transform-origin: 0 0;
    animation: ${grow} 17s linear;
  }
`

export default ProgressBar

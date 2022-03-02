import React from 'react'
import ReactDOM from 'react-dom'
import ToastBox from './ToastBox';

function createNotification(content, duration=4000){
  const div = document.createElement('div')
  div.style.background='gray';
  div.style.color='red';
  div.style.width='240px';
  div.style.height='40px';
  div.style.position='fixed';
  div.style.left='50%';
  div.style.top='50%';
  div.style.marginLeft='-120px';
  div.style.marginTop='-20px';
  div.style.textAlign='center';
  div.style.lineHeight='40px';
  div.style.borderRadius='10px';
  div.style.opacity=1;
  div.style.zIndex='999';
  div.style.fontSize='20px';

  let start = 1
  let end = 0
  let step = 0.025
  let count = (start-end)/step
  let gap = duration/count

  let timer = setInterval(()=>{ 
    if(div.style.opacity>=0){
      div.style.opacity -= step
    }else{
      clearInterval(timer)
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }, gap)

  document.body.appendChild(div)
  ReactDOM.render(<ToastBox content={content}/>, div)

}

const Toast = {
  info(content, duration){
    createNotification(content, duration)
  }
}

export default Toast

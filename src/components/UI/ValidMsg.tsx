import React from 'react'

interface Props {
    check: boolean
    children:string
}
const ValidMsg = ({check,children}:Props) => {
  return (
    !check ? <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '320px',
        height: '16.8px',
        textAlign: 'left',
        fontSize: '12px',
        color: '#F24957',
    }}>
        {children}</div>:
        <div></div>
    
  )
}

export default ValidMsg
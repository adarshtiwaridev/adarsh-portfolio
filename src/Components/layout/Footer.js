import React from 'react'

export default function Footer() {
  return (
    <footer style={{padding: '18px 24px', borderTop: '1px solid #e6e6e6', marginTop:32}}>
      <div style={{maxWidth: 960, margin: '0 auto', textAlign:'center'}}>
        <small style={{color:'#666'}}>© {new Date().getFullYear()} Adarsh Tiwari. All rights reserved.</small>
      </div>
    </footer>
  )
}

import React from 'react'

export default function Header(){
  return(
    <div>
      <style jsx>
        {`
          .header {
            text-align: center;
          }
        `}
      </style>
      <div className="header">
        <h1>Redux Practice</h1>
      </div>
    </div>
  )
}

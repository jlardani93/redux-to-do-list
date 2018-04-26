import React from 'react'

export default function Footer(){
  return(
    <div>
      <style jsx>{`
          .footer {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            text-align: center; 
          }
      `}
      </style>
      <div className="footer">
        <h3>Epicodus (c) Justin Lardani | 2018</h3>
      </div>
    </div>
  )
}

import React from 'react'

export default function DownloadCvButton() {
    const handleDowload=()=>{
        const link=document.createElement("a");
        link.href="./asset/file/CURRICULUM VITAE.pdf"
        link.download="aayasCV";
        link.click();
    }
  return (
    <button onClick={handleDowload} className='btn btn-outline-primary btn-lg text-bold'>Download CV <span>
        <i className="fa-solid fa-cloud-arrow-down" />
    </span>
    </button>
  )
}

import React from 'react'

function Preloader() {
    return (
        <div className="preloader">
            <div className="lds-ripple">
                <div className="lds-pos" />
                <div className="lds-pos" />
            </div>
        </div>
    )
}

export default Preloader

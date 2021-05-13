import React from 'react'

export default function Project({image, text, url}) {
    return (
        <div className="col-12 col-lg-4 col-md-6">
            <img src={image} class="img-fluid mb-3" alt={text} />
            <a className="btn btn-block bg-orange-a text-white mb-3" target="_blank" rel="noreferrer" href={url} role="button">VISIT PROJECT</a>
        </div>
    )
}


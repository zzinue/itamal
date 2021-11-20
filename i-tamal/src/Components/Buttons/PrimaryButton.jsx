import React from 'react'
import Counter from '../Counter'

const PrimaryButton = ({link, text}) => {
    return (
        <div>
            <Counter />
            <button href={link} className={`btn btn-primary`}>
                {text}
            </button>
        </div>
    )
}

export default PrimaryButton

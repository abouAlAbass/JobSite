import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
const Spinner = ({ loading }) => {
    const ovveride = {
        display: "block",
        margin: "100px auto"
    }
    return (

        <ClipLoader
            color='#4338ca'
            loading={loading}
            cssOverride={ovveride}
            size={150}
        />
    )
}

export default Spinner
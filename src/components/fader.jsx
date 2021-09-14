import React from 'react'
import PropTypes from 'prop-types'
import '../'
const fader = props => {
    return (
        <div>
            
        </div>
    )
}

fader.defaultProps = {
    text:'תפוס את האוצר'

}
fader.prototype={
    text:PropTypes.string
}

export default fader

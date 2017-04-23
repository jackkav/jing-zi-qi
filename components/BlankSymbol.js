import React from 'react'

const BlankSymbol = props => {
  return (
    <div
      className='symbol symbol--blank'
      onClick={() => props.addSymbol(props.turn)}
    />
  )
}

BlankSymbol.propTypes = {
  addSymbol: React.PropTypes.func.isRequired
}

export default BlankSymbol

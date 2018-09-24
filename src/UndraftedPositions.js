import React from 'react';

import Undrafted from './Undrafted'

function UndraftedPositions(props) {
  const fields = ['tier', 'name', 'team'];

  return (
    <div className='col-md-6 col-sm-12 hidden-xs'>
      <div className='aid-title'>
        <i className='fa fa-signal'></i> Top Picks By Position
      </div>

      <div className='col-sm-6'>
        <span className="col-sm-12 position-title">Center</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='C'
        />
      </div>

      <div className='col-sm-6'>
        <span className="col-sm-12 position-title">Right-Wing</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='RW'
        />
      </div>

      <div className='col-sm-6'>
        <span className="col-sm-12 position-title">Left-Wing</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='LW'
        />
      </div>

      <div className='col-sm-6'>
        <span className="col-sm-12 position-title">Defence</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='D'
        />
      </div>

      <div className='col-sm-6'>
        <span className="col-sm-12 position-title">Goalies</span>
        <Undrafted
          fields={fields}
          players={props.players}
          draft={(p) => props.draft(p)}
          size={15}
          position='G'
        />
      </div>
    </div>
  )
}

UndraftedPositions.propTypes = {
  draft: React.PropTypes.func.isRequired,
  players: React.PropTypes.array.isRequired,
};

export default UndraftedPositions

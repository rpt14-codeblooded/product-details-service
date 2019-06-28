import React from 'react';

const ConditionComponent = (props) => {
  return (
    <div>
    {props.prodDeets.map((status) =>
      <p key={status._id} status={status}>{status.condition}</p>
      )}
    </div>
  )
};

export default ConditionComponent;
import React, {FC} from 'react';
import {ReactComponent as Star} from './icons/star-svgrepo-com (1).svg';

type Props = {
  rate: number
  setRate: (rate: number) => void
}

const StarRate:FC<Props> = ({rate, setRate}) => {

  return (
    <div>
      {(new Array(5)).fill(0).map((_, index)=>
        <Star heigh={40} width={40} fill={index < rate ? '#ED8A19' : 'none'} onClick={()=>setRate(index+1)}/>
      )}
    </div>
  );
};

export default StarRate;
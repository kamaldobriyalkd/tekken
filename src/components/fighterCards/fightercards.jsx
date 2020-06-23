import React from 'react';
import {Card} from '../card/card';

import './fightercards.css';

export const FighterCards = (props) =>(
<div className='fighterCards'>
    {
    props.fighters.map(fighter => <Card key={fighter.id} fighter={fighter}/>)
    }
  </div>
);

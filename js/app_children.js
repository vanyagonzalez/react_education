require("bootstrap/dist/css/bootstrap.css");
import React from 'react';
import {render} from 'react-dom';
import GridComponent from './grid';
import {SummaryActive, SummaryUsers} from './summaries';
import UserDetails from './user-details';
import './user-details.css';



render(
    /*<GridComponent>
        <SummaryActive/>
    </GridComponent>,*/

    <UserDetails/>,

    document.getElementById('app')
);

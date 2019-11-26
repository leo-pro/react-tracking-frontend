import React, { Fragment } from 'react';


function TrackingEvents({ events }){
    if(!events || events.lenght === 0) return null;

    return (
        <Fragment>
            <h1>Tracking Events</h1>
            <ul className="list-group">
                {events.map(item => {
                    return (
                        <li className="list-group-item" key={item.descricao}>
                            <span>{item.data}</span>
                            <span>{item.descricao}</span>
                            <span>{item.cidade}/{item.uf}</span>
                        </li>
                    )        
                })}
            </ul>
        </Fragment>
        
    );
}

export default TrackingEvents;
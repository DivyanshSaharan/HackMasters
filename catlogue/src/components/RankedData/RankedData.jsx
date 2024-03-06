import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './RankedData.css'; // Import the CSS file

const RankedData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/olx")
            .then(res => res.json())
            .then(info => setData(info));
    }, []);

    return (
        <div className="ranked-data">
            <h2 className="ranked-data-heading">Ranked Data</h2>
            <div className="card-container">
                {data.map((item, index) => (
                    <Card
                        key={index}
                        {...item}
                        className="card"
                    />
                ))}
            </div>
        </div>
    );
};

export default RankedData;

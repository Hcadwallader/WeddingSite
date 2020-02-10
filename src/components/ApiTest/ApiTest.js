import React, { useState, useEffect } from 'react';

const ApiTest = () => {

    const [apiResponse, setApiResponse] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/api')
            .then((res) => res.json())
            .then((data) => setApiResponse(data.Message));
    }, []);

    return (
        <div>
            <br/>
            <p>{apiResponse}</p>
        </div>
    );

};

export default ApiTest;
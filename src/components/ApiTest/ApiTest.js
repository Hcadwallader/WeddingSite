import React, {useState, useEffect} from 'react';

const ApiTest = () => {

        const [apiResponse, setApiResponse] = useState(null);

        useEffect(() => {

            const guest = {
                firstName: 'Ceri',
                surname: 'Groves',
                attending: true
            };
            // fetch('http://localhost:8080/api/guests?name=Ceri')
            //     .then((res) => res.json())
            //     .then((data) => setApiResponse(data.Message));


            fetch('http://localhost:8080/api/guests', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(guest),
            })
                .then((res) => res.json())
                .then((data) => setApiResponse(data.Message));

            ;
        }, [])
        ;

        return (
            <div>
                <br/>
                <p>{apiResponse}</p>
            </div>
        );

    }
;

export default ApiTest;
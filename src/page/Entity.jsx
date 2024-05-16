import { useState, useEffect } from 'react';
import { fetchCarsForUser } from '../service/apiFacade';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Gør containeren til at fylde hele skærmen lodret */
`;


// eslint-disable-next-line react/prop-types
const Entity = ({ user }) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Hent bildataene, når komponenten er monteret
        fetchCarsForUser(user.token)
            .then(data => setCars(data))
            .catch(error => console.error('Fejl ved hentning af bildata:', error));
        console.log("msg from useeffect fetch cars",user)
        console.log(user.token)
    }, [user.token]);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        return formattedDate;
    }

    return (

        <Container>
            <div className="container">
                <h2>Alle biler</h2>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Mærke</th>
                        <th>Model</th>
                        <th>Årgang</th>
                        <th>Indregistrerings dato</th>
                        <th>Pris</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cars.map(car => (
                        <tr key={car.id}>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.year}</td>
                            <td>{formatDate(car.firstRegistrationDate)}</td>
                            <td>{car.price}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </Container>
    );
};

export default Entity;

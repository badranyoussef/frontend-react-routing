import { useState, useEffect } from 'react';
import { fetchCarsForUser } from '../service/apiFacade';
import styled from 'styled-components';

const EntityContainer = styled.div`
    margin: 20px;
`;

const CarTable = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.th`
    background-color: #f2f2f2;
`;

const TableRow = styled.tr`
    &:nth-child(even) {
        background-color: #f2f2f2;
    }

    &:hover {
        background-color: #ddd;
    }
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
        <EntityContainer>
            <h2>Alle biler</h2>
            <CarTable>
                <TableHeader>
                <TableRow>
                    <th>Mærke</th>
                    <th>Model</th>
                    <th>Årgang</th>
                    <th>Indregistrerings dato</th>
                    <th>Pris</th>
                </TableRow>
                </TableHeader>
                <tbody>
                {cars.map(car => (
                    console.log(car),
                    <tr key={car.id}>
                        <td>{car.brand}</td>
                        <td>{car.model}</td>
                        <td>{car.year}</td>
                        <td>{formatDate(car.firstRegistrationDate)}</td>
                        <td>{car.price}</td>
                    </tr>
                ))}
                </tbody>
            </CarTable>
        </EntityContainer>
    );
};

export default Entity;

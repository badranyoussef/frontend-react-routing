import car from '../assets/car.jpg'
import styled from 'styled-components';

// Styled component til bilen
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Gør containeren til at fylde hele skærmen lodret */
`;

const CustomImage = styled.img`
  width: 800px;
  height: auto;
  border-radius: 15px 50px 30px 5px;
`;

// eslint-disable-next-line react/prop-types
export default function Home({ user, isLoggedIn }) {
    return (
        <Container>
            <div>
                <h1>Home</h1>
                <h3>Hello and welcome to this amazing car app!</h3>
                {isLoggedIn && <p>WELCOME {user.email}</p>}
            </div>
            <CustomImage src={car} alt="" />
        </Container>
    );
}

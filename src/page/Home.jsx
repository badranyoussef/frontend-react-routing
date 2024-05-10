import car from '../assets/car.jpg'
import styled from 'styled-components';

// styled component til bilen
const CustomImage = styled.img`
  width: 800px;
  height: auto;
  border-radius: 15px 50px 30px 5px;
`;

// eslint-disable-next-line react/prop-types
export default function Home ({user, isLoggedIn}) {

    return (
        <>
            <h1>Home</h1>
            <h3>Hello and welcome to this amazing car app!</h3>
            {isLoggedIn && (
                <>
                    <p>WELCOME {user.email}</p>
                </>
            )}
            <div>
            <CustomImage src={car} alt=""/>
            </div>
        </>
    )
}

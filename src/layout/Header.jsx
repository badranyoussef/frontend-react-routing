import MainNav from './MainNav';

// eslint-disable-next-line react/prop-types
export default function Header({isLoggedIn}) {
    return (
        <>
            <MainNav isLoggedIn={isLoggedIn} />
        </>
    )
}
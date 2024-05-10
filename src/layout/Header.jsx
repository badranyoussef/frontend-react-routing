import MainNav from './MainNav';

export default function Header({isLoggedIn}) {
    return (
        <>
            <MainNav isLoggedIn={isLoggedIn} />
        </>
    )
}
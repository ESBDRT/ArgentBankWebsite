import Header from '../../components/header/header'
import Accounts from '../../components/accounts/accounts';
import Footer from '../../components/footer/footer'
import axios from 'axios';

function User() {
    return (
        <body>
            <Header/>
            <Accounts/>
            <Footer/>
        </body>
    )
}

export default User;
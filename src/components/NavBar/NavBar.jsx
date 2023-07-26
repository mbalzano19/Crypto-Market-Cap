import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar() {



    return(
        <nav>
            <Link to='/home'>Home</Link>
            &nbsp;&nbsp;
            <Link to='/order'>OrderHistory</Link>


            &nbsp;&nbsp;

        </nav>
    )
}
import jwt_decode from 'jwt-decode'
import { Outlet } from 'react-router-dom'
import PettakerHome from '../Components/PetrowHome/PettakerHome'
import BoardHome from '../Petboard/BoardHome';
import AdminHome from '../Components/admin/AdminHome/AdminHome';
import Home from '../Components/PetrowHome/Home';
function AdminProtect() {
    const token = localStorage.getItem('token')
    if (token) {
        const decode = jwt_decode(token)
        if (decode.roles === 'boarduser') {
            return <BoardHome />
        }else if (decode.roles === 'taker'){
            return <PettakerHome/>
        } else if (decode.roles === 'admin' && decode.is_admin) {
            return <Outlet />
        } else{
            return <Home />
        }
    } else {
        return <Home />
    }

}


export default AdminProtect

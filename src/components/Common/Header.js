import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {


    const navigate = useNavigate();


    const redirectToPreviousPage = () =>  {
        navigate(-1);
    }

    return (
        <>
            <div className="flex-container-21">
                <div><p className="prev btn btn-primary ms-2" onClick={redirectToPreviousPage}><i className="fa-solid fa-chevron-left"></i></p></div>
                <div><p className="next btn btn-secondary me-2">NEXT</p></div>
            </div>

        </>
    )
}

export default Header;
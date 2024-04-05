import logo from '../../../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favor</p>
            <p>{moment().format('dddd, MMMM D, YYYY')}</p>
            
        </div>
    );
};

export default Header;
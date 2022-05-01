import headshot from '../images/headshot-removebg.png';

export const Headshot = () => {
    return (
        <div id='profile-pic' className='custom-shadow'>
            <img src={headshot} alt='Headshot'/>
        </div>
    );
}

export default Headshot;

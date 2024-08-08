import GoogleMap from './Map'
import { useState } from 'preact/hooks'
import axios from 'axios';

export function DataFetch() {
    const [ip, setIp] = useState('');
    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const handleChange = (event) => {
        setIp(event.target.value);
    };

    const handleIpSelect = () => {
        console.log('Selected IP:', ip);
        axios.get(`https://ipapi.co/${ip}/json`)
            .then(response => {
                console.log('IP Data:', response.data);
                const { latitude, longitude } = response.data;
                setLatitude(latitude);
                setLongitude(longitude);
            })
            .catch(error => {
                console.error('Error fetching IP data:', error);
            });
    };

    return (
        <>
            <div>
                <input value={ip} onChange={handleChange} />
                <button onClick={handleIpSelect}>Fetch IP Data</button>
            </div>
            <GoogleMap latitude={latitude} longitude={longitude}/>
        </>
    )
}

export default DataFetch
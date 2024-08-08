import { useState, useEffect } from 'react';
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

function GoogleMap(props) {
    const [position, setPosition] = useState({ lat: props.latitude || 40, lng: props.longitude || -10 });

    useEffect(() => {
        // update position when latitude or longitude props change
        setPosition({ lat: props.latitude || 40, lng: props.longitude || -10 });
    }, [props.latitude, props.longitude]);

    return (
        <APIProvider apiKey={import.meta.env.GOOGLE_MAPS_API}>
            <div style={{ height: "100vh", width: "100vw" }}>
                <Map
                    defaultZoom={9}
                    center={position}
                    mapId={import.meta.env.MAP_ID}
                >
                    <AdvancedMarker position={position}></AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    );
}

export default GoogleMap;

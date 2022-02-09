/** @format */

import GoogleMapReact from "google-map-react";
import React from "react";

const AnyReactComponent = ({text}) => <div>{text}</div>;

const GoogleMap = ({data}) => {
	const defaultProps = {
		center: {
			lat: parseFloat(data.lat),
			lng: parseFloat(data.lng),
		},
		zoom: 11,
	};

	return (
		<div style={{height: "40vh", width: "100%"}}>
			<GoogleMapReact
				bootstrapURLKeys={{key: "AIzaSyATY4Rxc8jNvDpsK8ZetC7JyN4PFVYGCGM"}}
				defaultCenter={defaultProps.center}
				defaultZoom={defaultProps.zoom}
			>
				<AnyReactComponent
					lat={parseFloat(data.lat)}
					lng={parseFloat(data.lng)}
					text="My Marker"
				/>
			</GoogleMapReact>
		</div>
	);
};

export default GoogleMap;

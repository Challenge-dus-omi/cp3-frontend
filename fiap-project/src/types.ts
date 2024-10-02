interface NASARes {
	identifier: string;
	caption: string;
	image: string;
	version: string;
	centroid_coordinates: Centroidcoordinates;
	dscovr_j2000_position: Dscovrj2000position;
	lunar_j2000_position: Dscovrj2000position;
	sun_j2000_position: Dscovrj2000position;
	attitude_quaternions: Attitudequaternions;
	date: string;
	coords: Coords;
}

interface Coords {
	centroid_coordinates: Centroidcoordinates;
	dscovr_j2000_position: Dscovrj2000position;
	lunar_j2000_position: Dscovrj2000position;
	sun_j2000_position: Dscovrj2000position;
	attitude_quaternions: Attitudequaternions;
}

interface Attitudequaternions {
	q0: number;
	q1: number;
	q2: number;
	q3: number;
}

interface Dscovrj2000position {
	x: number;
	y: number;
	z: number;
}

interface Centroidcoordinates {
	lat: number;
	lon: number;
}

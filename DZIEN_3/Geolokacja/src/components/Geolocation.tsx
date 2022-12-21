import {FC} from "react";

type Props = {
    latitude:number | null
    longitude:number | null
}

const Geolocation: FC<Props> = ({latitude,longitude}) => (
    <div>
        <h1>Geolokalizacja:</h1>
        <div>Szerokość geograficzna: {latitude}</div>
        <div>Długość geograficzna: {longitude}</div>
    </div>
)

export default Geolocation

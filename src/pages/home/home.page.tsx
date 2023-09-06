import { AsyncOnEnvent } from "./async-on-event";
import { AsyncOnEnventConditial } from "./async-on-event-conditional";
import { AsyncOnEnventParallel } from "./async-on-event-parallel";
import { AsyncOnEnventSerial } from "./async-on-event-serial";
import { AsyncOnMounted } from "./async-on-mounted";
import { AsyncOnMountedSerial } from "./async-on-mounted-serial";

export function HomePage(){
  return <div>
    <AsyncOnMounted/>
    <AsyncOnMountedSerial/>
    <AsyncOnEnvent/>
    <AsyncOnEnventSerial/>
    <AsyncOnEnventParallel/>
    <AsyncOnEnventConditial/>
  </div>
}
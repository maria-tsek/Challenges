import { Fragment } from "react";
import Winner from "../Winner";
import { useImmer } from "use-immer";

import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";

const finishLine = 200;

export default function CarRace() {
  const [cars, updatedCars] = useImmer(initialCars);

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();

    updatedCars((draft) => {
      const carInDraft = draft.find((car) => car.emoji == clickedCar.emoji);
      carInDraft.position.x += coveredDistance;
      carInDraft.position.lastDistance = coveredDistance;
    });

    // const updatedCars = cars.map((car) => {
    //   if (car === clickedCar) {
    //     // Update the position of the clicked car
    //     return {
    //       ...car,
    //       position: {
    //         ...car.position,
    //         x: car.position.x + coveredDistance,
    //         lastDistance: coveredDistance,
    //       },
    //     };
    //   }
    //   return car;
    // });
    // //new state
    // setCars(updatedCars);
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => updatedCars(initialCars)} />
      ) : (
        <AllCarRoutes $finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track>
                <CarButton
                  onClick={() => moveCar(car)}
                  $positionX={car.position.x}
                  $lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}

import { Tesla, Audi, Toyota, Honda, Veicle } from "./03-liskov-b";

(() => {
	// const printCarSeats = (cars: (Tesla | Audi | Toyota | Honda)[]) => {
	const printCarSeats = (cars: Veicle[]) => {
		cars.forEach((car) => console.log(car.constructor.name, car.getNumberOfSeats()));

		// for (const car of cars) {
		// 	if (car instanceof Tesla) {
		// 		//// console.log("Tesla", car.getNumberOfTeslaSeats());
		// 		console.log("Tesla", car.getNumberOfSeats());
		// 		continue;
		// 	}
		// 	if (car instanceof Audi) {
		// 		//// console.log("Audi", car.getNumberOfAudiSeats());
		// 		console.log("Audi", car.getNumberOfSeats());
		// 		continue;
		// 	}
		// 	if (car instanceof Toyota) {
		// 		//// console.log("Toyota", car.getNumberOfToyotaSeats());
		// 		console.log("Toyota", car.getNumberOfSeats());
		// 		continue;
		// 	}
		// 	if (car instanceof Honda) {
		// 		//// console.log("Honda", car.getNumberOfHondaSeats());
		// 		console.log("Honda", car.getNumberOfSeats());
		// 		continue;
		// 	}
		// }
	};

	const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

	printCarSeats(cars);
})();

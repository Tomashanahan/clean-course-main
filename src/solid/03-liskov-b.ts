export abstract class Veicle {
	abstract getNumberOfSeats(): number;
}

export class Tesla extends Veicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats;
	}
	// // getNumberOfTeslaSeats() {
	// // 	return this.numberOfSeats;
	// // }
}

export class Audi extends Veicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats;
	}
	//// getNumberOfAudiSeats() {
	//// 	return this.numberOfSeats;
	//// }
}

export class Toyota extends Veicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats;
	}
	//// getNumberOfToyotaSeats() {
	//// 	return this.numberOfSeats;
	//// }
}

export class Honda extends Veicle {
	constructor(private numberOfSeats: number) {
		super();
	}

	getNumberOfSeats(): number {
		return this.numberOfSeats;
	}
	//// getNumberOfHondaSeats() {
	//// 	return this.numberOfSeats;
	//// }
}

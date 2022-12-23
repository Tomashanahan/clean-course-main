(() => {
	// función para obtener información de una película por Id
	//// function getAllMovies(movieId: string) {
	function getMovieById(movieId: string) {
		console.log({ movieId });
	}

	// función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
	//// function getAllMovieActors(id: string) {
	function getMovieCastById(id: string) {
		console.log({ id });
	}

	// funcion para obtener el bio del actor por el id
	function getActorBioById(actorId: string) {
		console.log({ actorId });
	}

	interface Movie {
		cast: string[];
		description: string;
		rating: number;
		title: string;
	}
	// Crear una película
	//// function createMovie(title: string, description: string, rating: number, cast: string[]) {
	function createMovie({ title, description, rating, cast }: Movie) {
		console.log({ title, description, rating, cast });
	}

	interface Actor {
		fullName: string;
		birthdate: Date;
	}
	// Crea un nuevo actor
	//// function createActorIfActorNotExists(fullName: string, birthdate: Date): boolean {
	function createActor({ fullName, birthdate }: Actor): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (fullName === "fernando") return false;

		console.log("Crear actor");
		return true;
	}

	// BAD way to make a function
	//// const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
	//// 	let result: number;
	//// 	if (isDead) {
	//// 		result = 1500;
	//// 	} else {
	//// 		if (isSeparated) {
	//// 			result = 2500;
	//// 		} else {
	//// 			if (isRetired) {
	//// 				result = 3000;
	//// 			} else {
	//// 				result = 4000;
	//// 			}
	//// 		}
	//// 	}

	//// 	return result;
	//// };

	// Better approach to implement the function
	const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
		if (isDead) {
			return 1500;
		}
		if (isSeparated) {
			return 2500;
		}
		if (isRetired) {
			return 3000;
		}

		return 4000;
	};
})();

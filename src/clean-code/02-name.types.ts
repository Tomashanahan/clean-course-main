(() => {
	// arreglo de temperaturas celsius
	//// const arrayOfNums = [33.6, 12.34];
	const celsiusTempetures = [33.6, 12.34];

	// Dirección ip del servidor
	//// const ip = "123.123.123.123";
	const serverIpAdress = "123.123.123.123";

	// Listado de usuarios
	//// const people = [
	//// 	{ id: 1, email: "fernando@google.com" },
	//// 	{ id: 2, email: "juan@google.com" },
	//// 	{ id: 3, email: "melissa@google.com" },
	//// ];
	const users = [
		{ id: 1, email: "fernando@google.com" },
		{ id: 2, email: "juan@google.com" },
		{ id: 3, email: "melissa@google.com" },
	];

	// Listado de emails de los usuarios
	const usersEmails = users.map((user) => user.email);

	// Variables booleanas de un video juego
	//// const jump = false;
	const canJump = false;
	//// const run = true;
	const canRun = true;
	//// const noTieneItems = true;
	const hasItems = true;
	//// const loading = false;
	const isLoading = false;

	// Otros ejercicios
	// tiempo inicial
	const startTime = new Date().getTime();
	//....
	// 3 doritos después
	//...
	// Tiempo al final
	const endTime = new Date().getTime() - startTime;

	// Funciones
	// Obtiene los libros
	function getBooks() {
		throw new Error("Function not implemented.");
	}

	// obtiene libros desde un URL
	function getBooksByUrl(url: string) {
		throw new Error("Function not implemented.");
	}

	// obtiene el área de un cuadrado basado en sus lados
	function getSquereArea(side: number) {
		throw new Error("Function not implemented.");
	}

	// imprime el trabajo
	function printTheJob() {
		throw new Error("Function not implemented.");
	}
})();

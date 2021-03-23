export class User {
	constructor(
		private name: string,
		private email: string,
		private fav_lang: string
	) {}

	public createSubscription() {
		return `Genial ${this.name}, tu suscripción se ha confirmado. Pronto estarás recibiendo correos acerca de ${this.fav_lang} a ${this.email}`;
	}
}

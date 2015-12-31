
class Logger {

	private start: number;

	public constructor() {
		this.start = Date.now();
	}

	private getRelativeTimeAsString(): string {
		return (Date.now() - this.start).toString();
	}

	private createLogMessage(msg: string): string {
		return '[' + this.getRelativeTimeAsString() + '] ' + msg;
	}

	public debug(message: string): void {
		console.log(this.createLogMessage(message));
	}

	public log(message: string): void {
		console.log(this.createLogMessage(message));
	}
}

export = Logger;
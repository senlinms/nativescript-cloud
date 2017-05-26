/**
 * Describes options that can be passed when starting an appetize emulator.
 */
interface IAppetizeEmulatorStartData {
	/**
	 * Path to the package file (.apk or .zip) to load - can either be a local path or a url.
	 */
	packageFile: string;
	/**
	 * Platform for the emulator - android or ios
	 */
	platform: string;
	/**
	 * Model of the emulator - for example nexus5, iphone5s, iphone6 - etc
	 */
	model: string;
}

/**
 * Describes service for initial interaction with appetize emulators.
 */
interface IAppetizeEmulatorLauncher {
	/**
	 * Starts an appetize emulator.
	 * @param {IAppetizeEmulatorStartData} data Options for starting emulator.
	 * @param optional {IConfigOptions} options The config options.
	 * @returns {string} A url containing an html page with the emulator inside an iframe. The url's host is localhost.
	 */
	startEmulator(data: IAppetizeEmulatorStartData): Promise<string>;
}

/**
 * Describes service for interaction with server which communicates with cloud emulators.
 */
interface ICloudDeviceEmulator {
	/**
	 * Event emitter instance that raises events upon finding/losing a device.
	 */
	deviceEmitter: CloudDeviceEmitter;

	/**
	 * Retrieves information about the currently running server for communication with cloud emulators.
	 * @returns {Promise<ICloudDeviceServerInfo>} Information about the server.
	 */
	getSeverAddress(): Promise<ICloudDeviceServerInfo>;

	/**
	 * Refreshes a cloud emulator.
	 * @param {string} deviceIdentifier The device's identifier.
	 * @returns {Promise<void>}
	 */
	refresh(deviceIdentifier: string): Promise<void>;

	/**
	 * Disposes the cloud-device-emulator package.
	 * @returns {Promise<any>}
	 */
	killServer(): Promise<any>;
}

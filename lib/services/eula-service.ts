import { EulaConstants } from "../constants";
import { EulaServiceBase } from "./eula-service-base";

export class EulaService extends EulaServiceBase implements IEulaService {
	constructor($httpClient: Server.IHttpClient,
		$userSettingsService: IUserSettingsService,
		$logger: ILogger,
		$fs: IFileSystem,
		$nsCloudDateTimeService: IDateTimeService,
		$lockfile: ILockFile,
		$settingsService: ISettingsService) {
		super($httpClient, $userSettingsService, $logger, $fs, $nsCloudDateTimeService, $lockfile, $settingsService);
	}

	protected getAcceptedEulaHashPropertyName(): string {
		return EulaConstants.acceptedEulaHashKey;
	}

	protected getEulaFileName(): string {
		return "EULA.pdf";
	}

	protected getEulaUrl(): string {
		return EulaConstants.eulaUrl;
	}
}

$injector.register("nsCloudEulaService", EulaService);

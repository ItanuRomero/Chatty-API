import { Repository } from "typeorm/repository/Repository";
import { EntityRepository } from "typeorm";

import { Setting } from "../entities/Setting";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export {SettingsRepository}
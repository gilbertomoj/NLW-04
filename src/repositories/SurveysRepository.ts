import { EntityRepository, Repository } from "typeorm"; // Pois a classe herda da biblioteca de repository
import { Survey } from "../models/Survey";

@EntityRepository(Survey) // Para colocar esse classe como uma entidade de Survey
class SurveysRepository extends Repository<Survey> {}

export { SurveysRepository };
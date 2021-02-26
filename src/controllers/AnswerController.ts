import { Request , Response} from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRespository";


class AnswerController {
    
    //http://localhost:8181/answers/1?u=6db6ee1e-96e8-4af1-be22-797f4dac0458

    //Route Params => Parametros que vêm na rota 

    //Query Params => Busca , Paginação (não obrigatorios)

    async execute(request : Request , response: Response){

        const {value} = request.params;
        const {u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const surveyUser = await surveysUsersRepository.findOne({
            id: String(u),
        });
        if(!surveyUser){
            throw new AppError("Survey User does not exists!");
            
        }

        surveyUser.value = Number(value);

        await surveysUsersRepository.save(surveyUser)

        return response.json(surveyUser)

    }
}

export { AnswerController };
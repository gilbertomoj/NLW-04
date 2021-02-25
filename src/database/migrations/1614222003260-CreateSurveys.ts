import {MigrationInterface, QueryRunner, Table} from "typeorm";
//yarn typeorm migrations:create -n CreateSurveys Para criar o migrations de geração de tabela
//yarn typeorm migrations:run para executar 
export class CreateSurveys1614220962749 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"surveys",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary: true
                    },
                    {
                        name:"title",
                        type:"varchar"
                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ]        
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("surveys")
    }

}

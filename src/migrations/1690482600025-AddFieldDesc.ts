import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFieldDesc1690482600025 implements MigrationInterface {
    name = 'AddFieldDesc1690482600025'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "description"`);
    }

}

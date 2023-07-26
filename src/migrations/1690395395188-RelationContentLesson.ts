import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationContentLesson1690395395188 implements MigrationInterface {
    name = 'RelationContentLesson1690395395188'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP COLUMN "link_content"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" ADD "link_content" character varying NOT NULL`);
    }

}

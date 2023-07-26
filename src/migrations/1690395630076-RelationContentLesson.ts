import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationContentLesson1690395630076 implements MigrationInterface {
    name = 'RelationContentLesson1690395630076'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "lessonId" TO "lesson_id"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME CONSTRAINT "UQ_0b349f6b8ca7f05eed39ffb956d" TO "UQ_a2b70b7b1d78329f1b697ebef19"`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_a2b70b7b1d78329f1b697ebef19" FOREIGN KEY ("lesson_id") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_a2b70b7b1d78329f1b697ebef19"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME CONSTRAINT "UQ_a2b70b7b1d78329f1b697ebef19" TO "UQ_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "content" RENAME COLUMN "lesson_id" TO "lessonId"`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

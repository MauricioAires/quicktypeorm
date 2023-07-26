import {MigrationInterface, QueryRunner} from "typeorm";

export class RelatioStudentsClass1690401230091 implements MigrationInterface {
    name = 'RelatioStudentsClass1690401230091'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students_classes" DROP CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a"`);
        await queryRunner.query(`ALTER TABLE "students_classes" DROP CONSTRAINT "FK_2f73035f51b47f648803e135f18"`);
        await queryRunner.query(`ALTER TABLE "students_classes" ADD CONSTRAINT "FK_2f73035f51b47f648803e135f18" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "students_classes" ADD CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students_classes" DROP CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a"`);
        await queryRunner.query(`ALTER TABLE "students_classes" DROP CONSTRAINT "FK_2f73035f51b47f648803e135f18"`);
        await queryRunner.query(`ALTER TABLE "students_classes" ADD CONSTRAINT "FK_2f73035f51b47f648803e135f18" FOREIGN KEY ("student_id") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "students_classes" ADD CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a" FOREIGN KEY ("class_id") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

}

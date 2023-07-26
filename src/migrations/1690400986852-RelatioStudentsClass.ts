import {MigrationInterface, QueryRunner} from "typeorm";

export class RelatioStudentsClass1690400986852 implements MigrationInterface {
    name = 'RelatioStudentsClass1690400986852'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "students_classes" ("class_id" uuid NOT NULL, "student_id" uuid NOT NULL, CONSTRAINT "PK_acd8876d88ca951f74209c4319d" PRIMARY KEY ("class_id", "student_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_c21299ba5e080c8ba3463b00b2" ON "students_classes" ("class_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_2f73035f51b47f648803e135f1" ON "students_classes" ("student_id") `);
        await queryRunner.query(`ALTER TABLE "students_classes" ADD CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a" FOREIGN KEY ("class_id") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "students_classes" ADD CONSTRAINT "FK_2f73035f51b47f648803e135f18" FOREIGN KEY ("student_id") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "students_classes" DROP CONSTRAINT "FK_2f73035f51b47f648803e135f18"`);
        await queryRunner.query(`ALTER TABLE "students_classes" DROP CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2f73035f51b47f648803e135f1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c21299ba5e080c8ba3463b00b2"`);
        await queryRunner.query(`DROP TABLE "students_classes"`);
    }

}

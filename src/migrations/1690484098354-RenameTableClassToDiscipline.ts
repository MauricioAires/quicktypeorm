import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RenameTableClassToDiscipline1690484098354
  implements MigrationInterface
{
  name = 'RenameTableClassToDiscipline1690484098354';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lesson" DROP CONSTRAINT "FK_a7f0924d071a1882a64286ef38e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "students_classes" DROP CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a"`,
    );
    await queryRunner.query(
      `CREATE TABLE "discipline" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" character varying, "duration" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_ba7f210baab523048c0386c3463" UNIQUE ("name"), CONSTRAINT "PK_139512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD CONSTRAINT "FK_a7f0924d071a1882a64286ef38e" FOREIGN KEY ("classe_id") REFERENCES "discipline"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "students_classes" ADD CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a" FOREIGN KEY ("class_id") REFERENCES "discipline"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "students_classes" DROP CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" DROP CONSTRAINT "FK_a7f0924d071a1882a64286ef38e"`,
    );
    await queryRunner.query(`DROP TABLE "discipline"`);
    await queryRunner.query(
      `ALTER TABLE "students_classes" ADD CONSTRAINT "FK_c21299ba5e080c8ba3463b00b2a" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD CONSTRAINT "FK_a7f0924d071a1882a64286ef38e" FOREIGN KEY ("classe_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}

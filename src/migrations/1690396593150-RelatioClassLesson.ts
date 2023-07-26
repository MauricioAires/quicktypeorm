import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelatioClassLesson1690396593150
  implements MigrationInterface
{
  name = 'RelatioClassLesson1690396593150';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lesson" DROP CONSTRAINT "FK_f8129e3c7eacda851f01f054f96"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" RENAME COLUMN "classeId" TO "classe_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD CONSTRAINT "FK_a7f0924d071a1882a64286ef38e" FOREIGN KEY ("classe_id") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lesson" DROP CONSTRAINT "FK_a7f0924d071a1882a64286ef38e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" RENAME COLUMN "classe_id" TO "classeId"`,
    );
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD CONSTRAINT "FK_f8129e3c7eacda851f01f054f96" FOREIGN KEY ("classeId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}

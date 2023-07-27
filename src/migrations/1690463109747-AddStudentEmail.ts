import { MigrationInterface, QueryRunner } from 'typeorm';

export default class AddStudentEmail1690463109747
  implements MigrationInterface
{
  name = 'AddStudentEmail1690463109747';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" RENAME COLUMN "link_content" TO "email"`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "student" RENAME COLUMN "email" TO "link_content"`,
    );
  }
}

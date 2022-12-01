import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'api_tokens'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {

      table.timestamp('expires_at', {userTz: true}).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

class CreateTalks < ActiveRecord::Migration[5.1]
  def change
    create_table :talks do |t|
      t.string :title
      t.text :description
      t.integer :uuid
      t.datetime :scheduled_date

      t.timestamps
    end
  end
end

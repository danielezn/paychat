class CreatePaymentMethods < ActiveRecord::Migration[5.1]
  def change
    create_table :payment_methods do |t|
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end

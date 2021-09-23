class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :prodRef
      t.string :prodName
      t.string :prodCity
      t.string :prodPrice
      t.belongs_to :city, index: true

      t.timestamps
    end
  end
end

class CreateListings < ActiveRecord::Migration[7.0]
  def change
    create_table :listings do |t|
      t.string :description 
      t.integer :price
      t.string :city
      t.string :state 
      t.integer :num_bedrooms 
      t.integer :num_bathrooms 
      t.string :image 
      t.integer :host_id 
      t.timestamps
    end
  end
end

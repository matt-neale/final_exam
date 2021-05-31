class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :body
      t.integer :price
      t.datetime :end_date

      t.timestamps
    end
  end
end

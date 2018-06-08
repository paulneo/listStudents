class AddAddressToStudent < ActiveRecord::Migration[5.1]
  def change
    add_column :students, :number_address, :string
    add_column :students, :apple_address, :string
  end
end

class AddDateOfBirthToCustomers < ActiveRecord::Migration[7.1]
  def change
    add_column :customers, :date_of_birth, :date
  end
end

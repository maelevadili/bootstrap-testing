json.extract! customer, :id, :firstname, :lastname, :email, :phone, :created_at, :updated_at, :date_of_birth
json.url customer_url(customer, format: :json)

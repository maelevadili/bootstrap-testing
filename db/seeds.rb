# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

require 'date'

puts "Reboot..."

Customer.destroy_all

puts "Running seeds..."

puts "Creating Customers..."

d1 = DateTime.new(1986, 6, 6)
d2 = DateTime.new(1977, 7, 2)
d3 = DateTime.new(1958, 5, 25)
d4 = DateTime.new(1956, 7, 2)
d5 = DateTime.new(1993, 11, 17)

Customer.create!(firstname: "Jane", lastname: "DOE",
  email: "jane@unknown.com", phone: "+33690485590", date_of_birth: "d2")

Customer.create!(firstname: "Bob", lastname: "SPONGE",
  email: "bob@ocean.com", phone: "+33682940052", date_of_birth: "d3")

Customer.create!(firstname: "Mickey", lastname: "MICE",
  email: "mickey@disney.com", phone: "+33683905564", date_of_birth: "d4")

Customer.create!(firstname: "Maëlla", lastname: "DÉGRAS",
  email: "mdegras@myrezapp.com", phone: "+33600000000", date_of_birth: "d1")

Customer.create!(firstname: "Mike", lastname: "TYSON",
  email: "uppercut@mike.com", phone: "+33857894456", date_of_birth: "d5")

puts "All done!"

Department.destroy_all

10.times do
  department = Department.create(
    name: Faker::Commerce.department,
  )

  20.times do
    item = department.items.create(
        name: Faker::Commerce.product_name,
        price: Faker::Commerce.price.to_f
    )
end
 end

 puts "Products Seeded"



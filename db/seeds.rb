Department.destroy_all

10.times do
  department = Department.create(
    name: Faker::Commerce.department,
  )

  10.times do
    item = department.items.create(
        name: Faker::Commerce.product_name,
        price: Faker::Commerce.price.to_f,
        department_id: department.id,
    )
end
 end

 puts "Products Seeded"



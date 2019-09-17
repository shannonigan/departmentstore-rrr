Department.destroy_all

10.times do
  Department.create(
    name: Faker::Commerce.department,
  )

  # 10.times do 
  #   name:
  #   price:
  #   department_id: d.id
  # end
 end
 puts "10 Products Seeded"
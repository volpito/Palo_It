# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

City.create(cityName: 'lyon')
City.create(cityName: 'marseille')
City.create(cityName: 'lille')
City.create(cityName: 'paris')
City.create(cityName: 'toulouse')

Product.create(prodRef: 'OIP',prodCity: 'lyon',prodName: 'fourchette',prodPrice: '200', city_id: 1)
Product.create(prodRef: 'OIPZERF',prodCity: 'paris',prodName: 'palette',prodPrice: '200', city_id: 4)
Product.create(prodRef: 'OIPEF',prodCity: 'paris',prodName: 'trotinette',prodPrice: '200', city_id: 4)
Product.create(prodRef: 'OIPERF',prodCity: 'lyon',prodName: 'bolinette',prodPrice: '200', city_id: 1)
Product.create(prodRef: 'OIPFREF',prodCity: 'lille',prodName: 'biquette',prodPrice: '200', city_id: 3)
Product.create(prodRef: 'OREF',prodCity: 'toulouse',prodName: 'chopinette',prodPrice: '200', city_id: 5)

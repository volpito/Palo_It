json.extract! product, :id, :prodRef, :prodName, :prodCity, :prodPrice, :created_at, :updated_at
json.url product_url(product, format: :json)

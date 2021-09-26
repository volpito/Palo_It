require 'rails_helper'

RSpec.describe "products/index", type: :view do
  before(:each) do
    assign(:products, [
      Product.create!(city_id: 1),
      Product.create!(city_id: 1)
    ])
  end

  it "renders a list of products" do
    render
  end
end

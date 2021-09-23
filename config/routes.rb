Rails.application.routes.draw do
  resources :products

  namespace :v1, defaults: {format: 'json'} do
    get 'things', to: "things#index"
  end

  get "/home", to: 'products#index'
  get '/products/city/:city_id', to: 'products#city', as: 'all_owners'

  root 'static#index'

end

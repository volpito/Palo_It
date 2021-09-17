Rails.application.routes.draw do
  resources :products

  namespace :v1, defaults: {format: 'json'} do
    get 'things', to: "things#index"
  end

  get "/home", to: 'products#index'

  root 'static#index'

end

Rails.application.routes.draw do
  resources :hosts
  resources :reviews
  resources :users
  resources :listings
  # route to test your configuration
  get '/hello', to: 'application#hello_world'
end

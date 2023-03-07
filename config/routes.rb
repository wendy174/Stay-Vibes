Rails.application.routes.draw do
  resources :hosts
  resources :reviews
  resources :users


  resources :listings, only: [:index]

end

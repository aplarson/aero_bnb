Rails.application.routes.draw do
  root to: 'root#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :flights, only: [:index, :create, :show]
    resources :airports
  end
end

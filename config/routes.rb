Rails.application.routes.draw do
  root to: 'root#root'

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: { format: :json } do
    resources :flights, only: [:index, :create, :show, :destroy, :update] do
      collection do
        get 'search'
      end
    end
    resources :users, only: [:show, :update]
    resources :reservations, only: [:index, :show, :create, :destroy]
    resources :airports
  end
end

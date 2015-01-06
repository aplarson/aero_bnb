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
    resources :reservations, only: [:index, :show, :create, :destroy] do
      member do
        patch 'confirm'
        patch 'reject'
      end
    end
    resources :airports do
      collection do
        get 'search'
        get 'names'
        get 'name_search'
      end
    end
    resources :comments, only: [:create]
  end
end

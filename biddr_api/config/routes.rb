Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :welcome, only: [:index]
      resources :auctions do
        resources :bids, only: [:create, :destroy]
      end
      resource :session, only: [:create, :destroy]
      resources :users, only: [:create] do
        get :current, on: :collection
      end
    end
  end
end

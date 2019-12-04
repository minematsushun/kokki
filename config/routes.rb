Rails.application.routes.draw do
  devise_for :users
  root to: "games#index"
  resources :games ,only: :index do
    collection do
      get "quize"
      get "timer"
      get "omikuji"
      get "slot"
      get "touch"
    end
  end

  resources :points, only: :create
end

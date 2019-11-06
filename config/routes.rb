Rails.application.routes.draw do
  devise_for :users
  root to: "games#index"
  get "games" => "games#index"
  get "quize" => "games#quize"
  get "timer" => "games#timer"
  get "omikuji" => "games#omikuji"
  get "slot" => "games#slot"
  get "touch" => "games#touch"
  resources :points, only: :create
end

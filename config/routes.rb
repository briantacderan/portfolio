Rails.application.routes.draw do
  resources :pages
  root 'pages#home'
  get 'projectA' => 'pages#fmfitness'
end

Rails.application.routes.draw do
  resources :pages
  root 'pages#home'
  get 'fmfitness' => 'pages#fmfitness'
  get 'hoodcast' => 'pages#hoodcast'
  get 'rellescookies' => 'pages#cookieshop'
end

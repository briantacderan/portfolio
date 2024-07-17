class PagesController < ApplicationController

  def home
    @home_menu = true
    @design_menu = false
  end

  def bullseye
    @home_menu = false
    @design_menu = true
    @photos = Photo.all
  end

  def cookieshop
    @home_menu = false
    @design_menu = false
  end

  def hoodcast
    @home_menu = false
    @design_menu = false
  end

  def fmfitness
    @home_menu = false
    @design_menu = false
  end

end

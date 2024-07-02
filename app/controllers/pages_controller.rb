class PagesController < ApplicationController

  def home
    @home_menu = true
  end

  def bullseye
    @design_menu = true
    @photos = Photo.all
  end

end

class PagesController < ApplicationController

  #s3 = "https://bullseye-studio.s3.us-west-1.amazonaws.com/"

  def home
    @home_menu = true
  end

  def bullseye
    @home_menu = false
  end

end

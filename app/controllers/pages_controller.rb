class PagesController < ApplicationController
  
  def welcome
    @projects = Project.all
  end
    
  def about
  end
  
  def contact
  end

end

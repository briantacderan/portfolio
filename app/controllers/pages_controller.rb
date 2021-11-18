class PagesController < ApplicationController
  
  def welcome
    @projects = Project.all
    @contacts = Contact.all
  end
    
  def about
  end
  
  def contact
  end

end

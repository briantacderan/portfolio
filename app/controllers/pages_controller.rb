class PagesController < ApplicationController
  
  def welcome
    @projects = Project.all
    @contacts = Contact.all
    @skills = Skill.all
  end
  
  def about
  end
  
  def contact
  end

end

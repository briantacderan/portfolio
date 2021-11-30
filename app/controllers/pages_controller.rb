class PagesController < ApplicationController
  
  def welcome
    @projects = Project.all
    @contacts = Contact.all
    @skills = Skill.all
    @s3 = "https://tacderan-code.s3.us-west-1.amazonaws.com/images/"
  end
  
  def about
  end
  
  def contact
  end

end

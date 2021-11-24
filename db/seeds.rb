# heroku restart && heroku pg:reset DATABASE_URL --confirm the-tacderan-code && heroku run rake db:migrate && heroku run rake db:seed

p1 = Project.create(title: "Hoodcast", type_of: "Web scraping data analysis", main: "Python", main_framework: "Flask", description: "Scrapes SEC EDGAR for company financial statements, styled into neat and easy-to-read tables", image: "hc-gold.svg", git_url: "https://github.com/briantacderan/hoodcast-gold", website_url: "https://hoodcast.gold", preview_file: "", additional_info: "includes additional module called Hoodflex for web crawling", id_tag: "hoodcast-project")

p2 = Project.create(title: "Cookies by Relle", type_of: "E-commerce", main: "Ruby", main_framework: "Rails", description: "Custom e-commerce website for a cookie shop", image: "cookies.svg", git_url: "https://github.com/briantacderan/rellescookies", website_url: "https://rellescookies.com", preview_file: "cookies-ex.gif", additional_info: "Includes Stripe API payment system", id_tag: "cookies-project")

p3 = Project.create(title: "FM Fitness", type_of: "Customizable subscription service", main: "Ruby", main_framework: "Rails", description: "Personal training website to include calendar reservation and subscription payment systems", image: "fm-fitness.svg", git_url: "https://github.com/briantacderan/fm_fitness", website_url: "https://fm-fitness.herokuapp.com", preview_file: "fitness-ex.gif", additional_info: "Includes Stripe API payment system and will add Google Calendar API", id_tag: "fitness-project")

p4 = Project.create(title: "Gold Medal Metrics", type_of: "Data science", main: "Python", main_framework: "Flask", description: "Codecademy Data Science Project organizing Olympic gold medal data for every country", image: "gold-medal.svg", git_url: "https://github.com/briantacderan/gold-medal-flask", website_url: "https://gold-metric-flask.herokuapp.com/", preview_file: "goldmedal-ex.gif", additional_info: "Completed Data Science project with additional CSS enchancing", id_tag: "codecademy-goldmedal")
 
p5 = Project.create(title: "Jammming", type_of: "Spotify API one pager", main: "javascript", main_framework: "MERN", description: "Codecademy Project featuring full stack React framework with testing", image: "jammyjam.svg", git_url: "", website_url: "https://jammyjamjam4life.surge.sh", preview_file: "jammy-ex.gif", additional_info: "", id_tag: "codecademy-jammy")

p6 = Project.create(title: "Storeo", type_of: "image sharing website", main: "Python, Ruby", main_framework: "Flask, Ruby on Rails", description: "Codecademy project I completed in both Ruby on Rails and Flask for practice", image: "storeo-plus.svg", git_url: "https://github.com/briantacderan/storeo-plus", website_url: "https://storeo-flask.herokuapp.com/", preview_file: "", additional_info: "Used as base for some of my projects like FM Fitness", id_tag: "codecademy-storeo")



c1 = Contact.create(title: "GitHub", url: "https://github.com/briantacderan?tab=repositories", fa_class: "github", fa_key: "fa-github")
c2 = Contact.create(title: "Twitter", url: "https://twitter.com/BrianTacderan", fa_class: "twitter", fa_key: "fa-twitter")
c3 = Contact.create(title: "LinkedIn", url: "https://www.linkedin.com/in/briantacderan", fa_class: "linkedin", fa_key: "fa-linkedin")
c4 = Contact.create(title: "Email", url: "mailto:briantacderan@gmail.com", fa_class: "email", fa_key: "fa-telegram-plane")



s1 = Skill.create(name: "Bash Scripting", icon: "icons/bash-icon.png", cert: "certificates/bash_scripting_BT.png")
s2 = Skill.create(name: "Command Line", icon: "icons/cmd-line-icon.png", cert: "certificates/command_line_BT.png")
s3 = Skill.create(name: "Build a Website with HTML, CSS, and Github Pages", icon: "icons/html-css-git.png", cert: "certificates/build_websites_BT.png")
s4 = Skill.create(name: "D3", icon: "icons/d3-icon.png", cert: "certificates/d3_BT.png")
s5 = Skill.create(name: "Git", icon: "icons/git-icon.png", cert: "certificates/git_BT.png")
s6 = Skill.create(name: "Building Interactive JavaScript Websites", icon: "icons/js-icon.png", cert: "certificates/interactive_javascript_BT.png")
s7 = Skill.create(name: "Python 3", icon: "icons/py-icon.png", cert: "certificates/python_3_BT.png")
s8 = Skill.create(name: "Basics of Blockchain with Python", icon: "icons/py-bchain-icon.png", cert: "certificates/blockchain_python_BT.png")
s9 = Skill.create(name: "How to Clean Data with Python", icon: "icons/py-data-clean.png", cert: "certificates/clean_data_python_BT.png")
s10 = Skill.create(name: "Build Chatbots with Python", icon: "icons/py-chatbot.png", cert: "certificates/python_chatbots_BT.png")
s11 = Skill.create(name: "Visualize Data with Python", icon: "icons/py-matplot.png", cert: "certificates/visualize_data_with_python_BT.png")
s12 = Skill.create(name: "Web Scraping with Beautiful Soup", icon: "icons/py-bs4-app.png", cert: "certificates/beautiful_soup_BT.png")
s13 = Skill.create(name: "Ruby", icon: "icons/ruby-icon.png", cert: "certificates/ruby_BT.png")
s14 = Skill.create(name: "Ruby on Rails", icon: "icons/rails-icon.png", cert: "certificates/ruby_on_rails_BT.png")
s15 = Skill.create(name: "Authentication with Ruby on Rails", icon: "icons/ruby-rails-app.png", cert: "certificates/rails_authentication_BT.png")
s16 = Skill.create(name: "Sass", icon: "icons/sass-icon.png", cert: "certificates/sass_BT.png")
s17 = Skill.create(name: "Swift", icon: "icons/swift-icon.png", cert: "certificates/swift_BT.png")
s18 = Skill.create(name: "Vue.js", icon: "icons/vue-icon.png", cert: "certificates/vue_BT.png")
s19 = Skill.create(name: "Web Development Career Path", icon: "icons/mern-app.png", cert: "certificates/web_developement_BT.png")

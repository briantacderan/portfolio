# heroku restart && heroku pg:reset DATABASE_URL --confirm the-tacderan-code && heroku run rake db:migrate && heroku run rake db:seed

p1 = Project.create(title: "Hoodcast", type_of: "Web scraping data analysis", main: "Python", main_framework: "Flask", description: "Scrapes SEC EDGAR for company financial statements, styled into neat and easy-to-read tables", image: "hc-gold.svg", git_url: "https://github.com/briantacderan/hoodcast-gold", website_url: "https://hoodcast.gold", preview_file: "", additional_info: "includes additional module called Hoodflex for web crawling", id_tag: "hoodcast-project")

p2 = Project.create(title: "Cookies by Relle", type_of: "E-commerce", main: "Ruby", main_framework: "Rails", description: "Custom e-commerce website for a cookie shop", image: "cookies.svg", git_url: "https://github.com/briantacderan/rellescookies", website_url: "https://rellescookies.com", preview_file: "cookies-ex.gif", additional_info: "Includes Stripe API payment system", id_tag: "cookies-project")

p3 = Project.create(title: "FM Fitness", type_of: "Customizable subscription service", main: "Ruby", main_framework: "Rails", description: "Personal training website to include calendar reservation and subscription payment systems", image: "fm-fitness.svg", git_url: "https://github.com/briantacderan/fm_fitness", website_url: "https://fm-fitness.herokuapp.com", preview_file: "fitness-ex.gif", additional_info: "Includes Stripe API payment system and will add Google Calendar API", id_tag: "fitness-project")

p4 = Project.create(title: "Gold Medal Metrics", type_of: "Data science", main: "Python", main_framework: "Flask", description: "Codecademy Data Science Project organizing Olympic gold medal data for every country", image: "gold-medal.svg", git_url: "https://github.com/briantacderan/gold-medal-flask", website_url: "https://gold-metric-flask.herokuapp.com/", preview_file: "goldmedal-ex.gif", additional_info: "Completed Data Science project with additional CSS enchancing", id_tag: "codecademy-goldmedal")
 
p5 = Project.create(title: "Jammming", type_of: "Spotify API one pager", main: "javascript", main_framework: "MERN", description: "Codecademy Project featuring full stack React framework with testing", image: "jammyjam.svg", git_url: "", website_url: "https://jammyjamjam4life.surge.sh", preview_file: "jammy-ex.gif", additional_info: "", id_tag: "codecademy-jammy")

p6 = Project.create(title: "Storeo", type_of: "image sharing website", main: "Python, Ruby", main_framework: "Flask, Ruby on Rails", description: "Codecademy project I completed in both Ruby on Rails and Flask for practice", image: "storeo-plus.svg", git_url: "https://github.com/briantacderan/storeo-plus", website_url: "https://storeo-flask.herokuapp.com/", preview_file: "", additional_info: "Used as base for some of my projects like FM Fitness", id_tag: "codecademy-storeo")




cap1 = Capstone.create(title: "Jammming", type_of: "Spotify API one pager", main: "Javascript", main_framework: "MERN", description: "Codecademy Project featuring full stack React framework with testing", image: "jammyjam.png", git_url: "", website: "jammyjamjam4life.surge.sh", additional_info: "")

cap2 = Capstone.create(title: "Storeo", type_of: "image sharing website", main: "Python, Ruby", main_framework: "Flask, Ruby on Rails", description: "Codecademy project I completed in both Ruby on Rails and Flask for practice", image: "storeo-logo.png", git_url: "https://github.com/briantacderan/storeo-plus", website: "https://storeo-flask.herokuapp.com/", additional_info: "Used as base for some of my projects like FM Fitness")




c1 = Contact.create(title: "GitHub", url: "https://github.com/briantacderan?tab=repositories", fa_class: "github", fa_key: "fa-github")

c2 = Contact.create(title: "Twitter", url: "https://twitter.com/BrianTacderan", fa_class: "twitter", fa_key: "fa-twitter")

c3 = Contact.create(title: "LinkedIn", url: "https://www.linkedin.com/in/briantacderan", fa_class: "linkedin", fa_key: "fa-linkedin")

c4 = Contact.create(title: "Email", url: "mailto:briantacderan@gmail.com", fa_class: "email", fa_key: "fa-telegram-plane")

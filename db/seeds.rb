Project.destroy_all
Capstone.destroy_all
Contact.destroy_all

p1 = Project.create(title: "Hoodcast", type_of: "web scraping", main: "Python", main_framework: "Flask", description: "Scrapes SEC EDGAR for company financial statements, styled into neat and easy-to-read tables", image: "hc-gold.svg", git_url: "https://github.com/briantacderan/hoodcast-gold", website: "https://hoodcast-gold.herokuapp.com/", additional_info: "includes additional module called Hoodflex for web crawling", id_tag: "hoodcast-project")

p2 = Project.create(title: "Cookies by Relle", type_of: "e-commerce", main: "Ruby", main_framework: "Rails", description: "Custom e-commerce website for a cookie shop", image: "cookies.svg", git_url: "https://github.com/briantacderan/cookies", website: "https://relles-cookies.herokuapp.com/", additional_info: "Includes Stripe API payment system", id_tag: "cookies-project")
 



cap1 = Capstone.create(title: "Storeo", type_of: "image sharing website", main: "Python, Ruby", main_framework: "Flask, Ruby on Rails", description: "Codecademy project I developed in both Ruby on Rails and Flask", image: "", git_url: "https://github.com/briantacderan/hoodcast.git", website: "https://storeo-flask.herokuapp.com/", additional_info: "https://storeo-plus.herokuapp.com/")

cap1 = Capstone.create(title: "Gold Medal Metrics", type_of: "image sharing website", main: "Python, Javascript", main_framework: "Flask, MERN", description: "Codecademy project I developed in both Ruby on Rails and Flask", image: "", git_url: "https://github.com/briantacderan/hoodcast.git", website: "https://gold-metric-flask.herokuapp.com/", additional_info: "")

cap3 = Capstone.create(title: "Jammming", type_of: "Spotify API one pager", main: "javascript", main_framework: "MERN", description: "", image: "", git_url: "", website: "jammyjamjam4life.surge.sh", additional_info: "")




c1 = Contact.create(title: "LinkedIn", url: "https://www.linkedin.com/in/briantacderan", fa_class: "linkedin", fa_key: "fa-linkedin")

c2 = Contact.create(title: "GitHub", url: "https://github.com/briantacderan", fa_class: "github", fa_key: "fa-github")

c3 = Contact.create(title: "Twitter", url: "https://twitter.com/BrianTacderan", fa_class: "twitter", fa_key: "fa-twitter")

c4 = Contact.create(title: "Email", url: "mailto:briantacderan@gmail.com", fa_class: "email", fa_key: "fa-telegram-plane")

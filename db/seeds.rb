# heroku restart && heroku pg:reset DATABASE_URL --confirm the-tacderan-code && heroku run rake db:migrate && heroku run rake db:seed

p1 = Project.create(title: "FM Fitness", type_of: "Customizable subscription service", main: "SwiftUI", main_framework: "Rails", description: "Personal training website and iOS app with booking calendar through Google Cloud and Stripe API with \"owner&user\"-friendly admin", image: "fm-fitness.svg", git_url: "https://github.com/briantacderan/fm_fitness", website_url: "https://fm-fitness.herokuapp.com", preview_file: "fitness-ex.gif", additional_info: "Built on SwiftUI iOS and on web with Ruby on Rails", id_tag: "fitness-project")

p2 = Project.create(title: "Hoodcast", type_of: "Web scraping data analysis", main: "Python", main_framework: "Flask", description: "Scrapes SEC EDGAR for company financial statements, styled into easy-to-read sheets. Quick Financials for the lay-trader", image: "hc-gold.svg", git_url: "https://github.com/briantacderan/hoodcast-gold", website_url: "https://hoodcast.gold", preview_file: "hoodcast-ex.gif", additional_info: "includes additional module called Hoodflex for web crawling", id_tag: "hoodcast-project")

p3 = Project.create(title: "Cookies by Relle", type_of: "E-commerce", main: "Ruby", main_framework: "Rails", description: "Custom e-commerce website for a cookie shop. Fully functionional payment system using Stripe through Ruby on Rails", image: "cookies.svg", git_url: "https://github.com/briantacderan/rellescookies", website_url: "https://rellescookies.com", preview_file: "cookies-ex.gif", additional_info: "Includes Stripe API payment system", id_tag: "cookies-project")

p4 = Project.create(title: "Unquote", type_of: "Android Mobile", main: "Java", main_framework: "JDK", description: "Codecademy Android Mobile Project built with Gradle. XML views configured with ConstraintLayout and MaterialUI from AndroidX", image: "unquote.svg", git_url: "https://github.com/briantacderan/unquote", website_url: "https://github.com/briantacderan/unquote", preview_file: "unquote-ex.gif", additional_info: "Completed with Android Studio", id_tag: "codecademy-unquote")

p5 = Project.create(title: "Gold Medal Metrics", type_of: "Data science", main: "Python", main_framework: "Flask", description: "Codecademy Data Science Project organizing Olympic gold medal data for every country. Data Organization boilerplate", image: "gold-medal.svg", git_url: "https://github.com/briantacderan/gold-medal-flask", website_url: "https://gold-metric-flask.herokuapp.com/", preview_file: "goldmedal-ex.gif", additional_info: "Completed Data Science project with additional CSS styling", id_tag: "codecademy-goldmedal")
 
p6 = Project.create(title: "Jammming", type_of: "Spotify API one pager", main: "javascript", main_framework: "MERN", description: "Codecademy Project featuring React web w/ simple Spotify API. Boilerplate for MERN and REST-ful app architectures", image: "jammyjam.svg", git_url: "https://github.com/briantacderan/jammming", website_url: "https://jammyjamz.surge.sh", preview_file: "jammy-ex.gif", additional_info: "", id_tag: "codecademy-jammy")

p7 = Project.create(title: "Storeo", type_of: "image sharing website", main: "Python, Ruby", main_framework: "Flask, Ruby on Rails", description: "Codecademy project I completed in both Ruby on Rails and Flask for practice. Boilerplate for image upload/storage applications", image: "storeo-plus.svg", git_url: "https://github.com/briantacderan/heroes", website_url: "https://storeo-flask.herokuapp.com/", preview_file: "", additional_info: "Used as base for some of my projects like FM Fitness", id_tag: "codecademy-storeo")



c1 = Contact.create(title: "GitHub", url: "https://github.com/briantacderan?tab=repositories", fa_class: "github", fa_key: "fa-github")
c2 = Contact.create(title: "Twitter", url: "https://twitter.com/BrianTacderan", fa_class: "twitter", fa_key: "fa-twitter")
c3 = Contact.create(title: "LinkedIn", url: "https://www.linkedin.com/in/briantacderan", fa_class: "linkedin", fa_key: "fa-linkedin")
c4 = Contact.create(title: "Email", url: "mailto:briantacderan@gmail.com", fa_class: "email", fa_key: "fa-telegram-plane")



s1 = Skill.create(name: "Web Development Career Path", icon: "icons/web-dev-plus.png", cert: "certificates/web_developement_BT.png")
s2 = Skill.create(name: "Python 3", icon: "icons/py-icon.png", cert: "certificates/python_3_BT.png")
s3 = Skill.create(name: "Ruby", icon: "icons/ruby-icon.png", cert: "certificates/ruby_BT.png")
s4 = Skill.create(name: "Swift", icon: "icons/swift-icon.png", cert: "certificates/swift_BT.png")
s5 = Skill.create(name: "Java", icon: "icons/java-icon.png", cert: "certificates/java_BT.png")
s6 = Skill.create(name: "Building Interactive JavaScript Websites", icon: "icons/js-icon.png", cert: "certificates/interactive_javascript_BT.png")
s7 = Skill.create(name: "Build a Website with HTML, CSS, and Github Pages", icon: "icons/html-css-git.png", cert: "certificates/build_websites_BT.png")
s8 = Skill.create(name: "Bash Scripting", icon: "icons/bash-icon.png", cert: "certificates/bash_scripting_BT.png")
s9 = Skill.create(name: "Command Line", icon: "icons/cmd-line-icon.png", cert: "certificates/command_line_BT.png")
s10 = Skill.create(name: "D3", icon: "icons/d3-icon.png", cert: "certificates/d3_BT.png")
s11 = Skill.create(name: "Git", icon: "icons/git-icon.png", cert: "certificates/git_BT.png")
s12 = Skill.create(name: "Heroku", icon: "icons/heroku-icon.png", cert: "certificates/heroku_netlify_BT.png")
s13 = Skill.create(name: "Android apps with Java", icon: "icons/java-android.png", cert: "certificates/java_mobile_BT.png")
s14 = Skill.create(name: "Basics of Blockchain with Python", icon: "icons/py-bchain-icon.png", cert: "certificates/blockchain_python_BT.png")
s15 = Skill.create(name: "How to Clean Data with Python", icon: "icons/py-data-clean.png", cert: "certificates/clean_data_python_BT.png")
s16 = Skill.create(name: "Build Chatbots with Python", icon: "icons/py-chatbot.png", cert: "certificates/python_chatbots_BT.png")
s17 = Skill.create(name: "Visualize Data with Python", icon: "icons/py-matplot.png", cert: "certificates/visualize_data_with_python_BT.png")
s18 = Skill.create(name: "Web Scraping with Beautiful Soup", icon: "icons/py-bs4-app.png", cert: "certificates/beautiful_soup_BT.png")
s19 = Skill.create(name: "Responsive Design", icon: "icons/resp-design-icon.png", cert: "certificates/rep_design_BT.png")
s20 = Skill.create(name: "Ruby on Rails", icon: "icons/rails-icon.png", cert: "certificates/ruby_on_rails_BT.png")
s21 = Skill.create(name: "Authentication with Ruby on Rails", icon: "icons/ruby-rails-app.png", cert: "certificates/rails_authentication_BT.png")
s22 = Skill.create(name: "Sass", icon: "icons/sass-icon.png", cert: "certificates/sass_BT.png")
s23 = Skill.create(name: "Vue.js", icon: "icons/vue-icon.png", cert: "certificates/vue_BT.png")
s24 = Skill.create(name: "Codecademy Intro 1", icon: "icons/ca-icon.png", cert: "certificates/intro_code_BT.png")
s25 = Skill.create(name: "Codecademy Intro 2", icon: "icons/ca-icon.png", cert: "certificates/intro_code2_BT.png")


srt1 = Stone.create(stacks: ["icons/swift-icon.png", "icons/rails-icon.png", "icons/stripe-icon.png"], racks: ["Update months later", "UX-focused Booking System", "The ARC"], tags: ["FMFitness is my latest project that my friend asked me to build for his personal business. Being the main project I have been focused on, as Java and Swift/iOS was completely new to me, and after half a year into mobile development, I'm loving it.", "Finally enabled an admin page where my friend would easily be able to navigate, manage appointments. Would want to add many more features to practice for future projects", "Concurrency/Async methods in mobile dev has definitely shown the importance of why testing is very important, especially if working with enterprise-sized software"], project_id: p1.id)

srt2 = Stone.create(stacks: ["icons/py-icon.png", "icons/flask-icon.png", "icons/bs4-icon.png"], racks: ["hoodflex", "Deconstructed statements", "Logo + loading fill animation"], tags: ["PyPI package created as separate library housing the webscraping operations, separated into multiple modules for ease", "Jinja2 templating engine for HTML is the tool used to re-piece the financials. In combination with CSS, JS, and the right algorithms, the EDGAR SEC data has been properly re-pivoted into custom tables, along with sticky headers and instant static-page statement changes", "Custom logo created with Inkscape, a vector graphics software. Enabled svg logo to animate fill during webscraping request load sequence"], project_id: p2.id)

srt3 = Stone.create(stacks: ["icons/rails-icon.png", "icons/stripe-icon.png", "icons/js-icon.png"], racks: ["Logo + Menu Design", "Stripe Payment", "SSL Secure"], tags: ["Created this website based on a friend's local cookie business. The site is custom made to closely match her business, along with including her Instagram pictures and logo and touches of the sweet side of the Bay Area.", "Stripe Payment is completely functional; however, only in test mode. (Order on her IG, click the heart! Local Only)", "Along with this site, Hoodcast, and this Portfolio, SSL certificates are set up to encrypt communication, giving credibility to this site/domain, specially important for transacation-heavy e-commerce businesses"], project_id: p3.id)



srt4 = Stone.create(stacks: ["icons/java-android.png", "icons/gradle-icon.png", "icons/material-icon.png"], racks: ["Indeed I say!", "Android Studio", "So much room for..."], tags: ["Creating this simple trivia game app was suprisingly packed with layers of files, yet those files were consolidated in schemes and models that could be understood much easier as I becanme familiar with the structure", "This swiss-army knife of IDEs let me appreciate why Java, Rust, and other compiling languages can provide such useful ways to build an app. When it comes to OOP, Android Studio with Java makes the app you're building a bit more tangible than I'm used to", "...ACTIVITIES! When thinking of security, speed, and debugging, Java was ready to the rescue. But it was interesting to pick apart some circular dependency that was hiding in there"], project_id: p4.id)

srt5 = Stone.create(stacks: ["icons/py-icon.png", "icons/flask-icon.png", "icons/py-matplot.png", "icons/pandas-icon.png"], racks: ["Data simplified!", "Navigate and Filter", "The 411"], tags: ["I've used Excel all through HS and College, but Pandas' and Python's ease of syntax and readability really expanded what an actual pivot table can consist of and what it could be used for", "With python's writablility and versatility through Flask, I learned that data sets of all kinds can be presented to anybody coming from any industry. Statistics is universal", "Moreover, this information can be consolidated to be useful for a certain project or goal. I used this Codecademy project as a boilerplate for my financial Hoodcast layout"], project_id: p5.id)

srt6 = Stone.create(stacks: ["icons/mern-app.png", "icons/js-icon.png"], racks: ["First contact", "Step-by-step", "D'oh!"], tags: ["It was with the Web Development Career Path with JS where I realized such mysteries in CS but even bigger curiorsities arose to find them", "Coding javascript feels like climbing up (or down) a ladder. Descending one line at a time, you really get to see what is being done to achieve the communication between servers and clients", "The most frustrating part of JS and Node is its package manager, but I think its great to collect those series of apps you've successfully built It's definitely going to be unique. JS is definitely a trade-off between complexity and the task to make itself simple."], project_id: p6.id)

srt7 = Stone.create(stacks: ["icons/ruby-rails-app.png", "icons/flask-logo.png", "icons/rust-logo.png"], racks: ["First Contact, Again!", "Which does Storage best?", "The Big 3"], tags: ["I've created this app first in Rails, then Flask, and now I'm in the processs transferring it to RUST with Rocket and Diesel! Creating the same app in different languages could super enlightening, or may lead to disillusionment", "I don't know if it was due to specific tutorials, but it's clear that Rust performs the best and safest. I created a smaller version of Storeos from a tutorial that helped me build the Heroes app on my GitHub. I'll put that on the Git link instead of Storeos", "So far, these frameworks have impressed me the most, but I am so excited to learn about many more. The possiblities are endless..."], project_id: p7.id)

# heroku restart && heroku pg:reset DATABASE_URL --confirm the-tacderan-code && heroku run rake db:migrate && heroku run rake db:seed && cd .. && cd heroes && heroku run ./target/release/diesel migration run && cd .. && cd bullseye-studio && heroku run rake db:migrate && heroku run rake db:seed && cd ~

p1 = Project.create(title: "FM Fitness", type_of: "Customizable subscription service", main: "SwiftUI", main_framework: "Rails", description: "Personal Fitness website with Swift iOS app for appointments using Google Cloud, a simple Stripe API with user-friendly admin", image: "fm-fitness.svg", git_url: "https://github.com/briantacderan/fmfitness-ios", website_url: "https://fm-fitness.herokuapp.com", preview_file: "fitness-ex.gif", additional_info: "sm-img-land", id_tag: "fitness-project")

p2 = Project.create(title: "Hoodcast", type_of: "Web scraping data analysis", main: "Python", main_framework: "Flask", description: "Scrapes SEC EDGAR for company financial statements, styled into easy-to-read sheets. Quick Financials for the lay-trader", image: "hc-gold.svg", git_url: "https://github.com/briantacderan/hoodcast-gold", website_url: "https://hoodcast-gold.herokuapp.com/", preview_file: "hoodcast-ex.gif", additional_info: "sm-img-squa", id_tag: "hoodcast-project")

p3 = Project.create(title: "Cookies by Relle", type_of: "E-commerce", main: "Ruby", main_framework: "Rails", description: "Custom e-commerce website for a cookie shop. Fully functionional payment system using Stripe through Ruby on Rails", image: "cookies.svg", git_url: "https://github.com/briantacderan/rellescookies", website_url: "https://rellescookies.com", preview_file: "cookies-ex.gif", additional_info: "med-img-land", id_tag: "cookies-project")

p4 = Project.create(title: "Unquote", type_of: "Android Mobile", main: "Java", main_framework: "JDK", description: "Codecademy Android Mobile Project built with Gradle. XML views configured with ConstraintLayout and MaterialUI from AndroidX", image: "unquote.svg", git_url: "https://github.com/briantacderan/unquote", website_url: "https://github.com/briantacderan/unquote", preview_file: "unquote-ex.gif", additional_info: "med-img-squa", id_tag: "codecademy-unquote")

p5 = Project.create(title: "Bossing Machine", type_of: "ExpressJS/Mocha+Chai", main: "Javascript", main_framework: "MERN", description: "Codecademy Web Development Capstone Project featuring Client Side MERN+ comprehensive data, API & testing boilerplate", image: "bossing.png", git_url: "https://github.com/briantacderan/boss-machine", website_url: "https://bossing-machine.herokuapp.com/", preview_file: "bossing-ex.gif", additional_info: "med-img-land", id_tag: "codecademy-bossing")

p6 = Project.create(title: "Gold Medal Metrics", type_of: "Data science", main: "Python", main_framework: "Flask", description: "Codecademy Data Science Project organizing Olympic gold medal data for every country. Data Organization boilerplate", image: "gold-medal.svg", git_url: "https://github.com/briantacderan/gold-medal-flask", website_url: "https://gold-metric-flask.herokuapp.com/", preview_file: "goldmedal-ex.gif", additional_info: "sm-img-squa", id_tag: "codecademy-goldmedal")

p7 = Project.create(title: "Herodexter", type_of: "Rust Image Uploader", main: "Rust", main_framework: "Rocket/Diesel", description: "Medium.com Rust Side Project of sample SQL image storage manager and general Rust Rocket/Diesel framework boilerplate starter", image: "herodex-logo.svg", git_url: "https://github.com/briantacderan/heroes", website_url: "https://herodexter.herokuapp.com/", preview_file: "herodex-ex.gif", additional_info: "lrg-img-full", id_tag: "medium-heroes")

p8 = Project.create(title: "Jammming", type_of: "Spotify API one pager", main: "Javascript", main_framework: "MERN", description: "Codecademy Project featuring React web w/ simple Spotify API. Boilerplate for MERN and REST-ful app architectures", image: "jammyjam.svg", git_url: "https://github.com/briantacderan/jammming", website_url: "https://jammyjamz.surge.sh", preview_file: "jammy-ex.gif", additional_info: "sm-img-land", id_tag: "codecademy-jammy")



c1 = Contact.create(title: "GitHub", url: "https://github.com/briantacderan?tab=repositories", fa_class: "github", fa_key: "fa-github")
c2 = Contact.create(title: "Twitter", url: "https://twitter.com/BrianTacderan", fa_class: "twitter", fa_key: "fa-twitter")
c3 = Contact.create(title: "LinkedIn", url: "https://www.linkedin.com/in/briantacderan", fa_class: "linkedin", fa_key: "fa-linkedin")
c4 = Contact.create(title: "Email", url: "mailto:brian@thetacderancode.com", fa_class: "email", fa_key: "fa-telegram-plane")



s1 = Skill.create(name: "Web Development Career Path", icon: "icons/web-dev-plus.png", cert: "certificates/web_developement_BT.png")
s2 = Skill.create(name: "Build Machine Learning Models", icon: "icons/machine-learning.png", cert: "certificates/machine_learning_BT.png")
s3 = Skill.create(name: "Build Chatbots with Python", icon: "icons/py-chatbot.png", cert: "certificates/python_chatbots_BT.png")
s4 = Skill.create(name: "Basics of Blockchain with Python", icon: "icons/py-bchain-icon.png", cert: "certificates/blockchain_python_BT.png")
s5 = Skill.create(name: "Authentication with Ruby on Rails", icon: "icons/ruby-rails-app.png", cert: "certificates/rails_authentication_BT.png")
s6 = Skill.create(name: "Swift", icon: "icons/swift-icon.png", cert: "certificates/swift_BT.png")
s7 = Skill.create(name: "Android apps with Java", icon: "icons/java-android.png", cert: "certificates/java_mobile_BT.png")
s8 = Skill.create(name: "Web Scraping with Beautiful Soup", icon: "icons/py-bs4-app.png", cert: "certificates/beautiful_soup_BT.png")
s9 = Skill.create(name: "Building Interactive JavaScript Websites", icon: "icons/js-icon.png", cert: "certificates/interactive_javascript_BT.png")
s10 = Skill.create(name: "Java", icon: "icons/java-icon.png", cert: "certificates/java_BT.png")
s11 = Skill.create(name: "Python 3", icon: "icons/py-icon.png", cert: "certificates/python_3_BT.png")
s12 = Skill.create(name: "Ruby", icon: "icons/ruby-icon.png", cert: "certificates/ruby_BT.png")
s13 = Skill.create(name: "Build a Website with HTML, CSS, and Github Pages", icon: "icons/html-css-git.png", cert: "certificates/build_websites_BT.png")
s14 = Skill.create(name: "Bash Scripting", icon: "icons/bash-icon.png", cert: "certificates/bash_scripting_BT.png")
s15 = Skill.create(name: "Command Line", icon: "icons/cmd-line-icon.png", cert: "certificates/command_line_BT.png")
s16 = Skill.create(name: "D3", icon: "icons/d3-icon.png", cert: "certificates/d3_BT.png")
s17 = Skill.create(name: "Git", icon: "icons/git-icon.png", cert: "certificates/git_BT.png")
s18 = Skill.create(name: "Heroku", icon: "icons/heroku-icon.png", cert: "certificates/heroku_netlify_BT.png")
s19 = Skill.create(name: "How to Clean Data with Python", icon: "icons/py-data-clean.png", cert: "certificates/clean_data_python_BT.png")
s20 = Skill.create(name: "Visualize Data with Python", icon: "icons/py-matplot.png", cert: "certificates/visualize_data_with_python_BT.png")
s21 = Skill.create(name: "Responsive Design", icon: "icons/resp-design-icon.png", cert: "certificates/rep_design_BT.png")
s22 = Skill.create(name: "Ruby on Rails", icon: "icons/rails-icon.png", cert: "certificates/ruby_on_rails_BT.png")
s23 = Skill.create(name: "Sass", icon: "icons/sass-icon.png", cert: "certificates/sass_BT.png")
s24 = Skill.create(name: "Vue.js", icon: "icons/vue-icon.png", cert: "certificates/vue_BT.png")
s25 = Skill.create(name: "Codecademy Intro 2", icon: "icons/ca-icon.png", cert: "certificates/intro_code2_BT.png")


srt1 = Stone.create(stacks: ["icons/swift-icon.png", "icons/rails-icon.png", "icons/stripe-icon.png"], racks: ["Update months later", "UX-focused Booking System", "The ARC"], tags: ["FMFitness is my latest project that my friend asked me to build for his personal business. I have been focused on mastering Swift/iOS, and after a few months, I'm loving it.", "Finally enabled an admin page where my friend would easily be able to navigate, manage appointments. Would want to add many more features to practice for future projects", "Learning about how Swift handles concurrency of processes, testing is very important, I've found, albeit with enterprise-sized applications"], project_id: p1.id)

srt2 = Stone.create(stacks: ["icons/py-icon.png", "icons/flask-icon.png", "icons/bs4-icon.png"], racks: ["hoodflex", "Deconstructed statements", "Logo + loading fill animation"], tags: ["PyPI package created as separate library housing the webscraping operations, separated into multiple modules for ease", "Jinja2 templating engine for HTML is the tool used to re-piece the financials. In combination with CSS, JS, and the right algorithms, the EDGAR SEC data has been properly re-pivoted into custom tables, along with sticky headers and instant static-page statement changes", "Custom logo created with Inkscape, a vector graphics software. Enabled svg logo to animate fill during load sequence. Design Challenge"], project_id: p2.id)

srt3 = Stone.create(stacks: ["icons/rails-icon.png", "icons/stripe-icon.png", "icons/js-icon.png"], racks: ["Logo + Menu Design", "Stripe Payment", "SSL Secure"], tags: ["Created this website based on a friend's local cookie business. The site is custom made to closely match her business, along with including her Instagram pictures and logo and touches of the sweet side of the Bay Area.", "Stripe Payment is completely functional; however, only in test mode. (Order on her IG, click the heart! Local Only)", "Along with this site, Hoodcast, and this Portfolio, SSL certificates are set up to encrypt communication, giving credibility to this site/domain, specially important for transacation-heavy e-commerce businesses"], project_id: p3.id)

srt4 = Stone.create(stacks: ["icons/java-android.png", "icons/gradle-icon.png", "icons/material-icon.png"], racks: ["Indeed I say!", "Android Studio", "So much room for..."], tags: ["Creating this simple trivia game app was suprisingly packed with layers of files, yet those files were consolidated in schemes and models that could be understood much easier as I becanme familiar with the structure", "The IDE allowed me to appreciate why Java, Rust, and other compiling languages can provide such useful ways to build. When it comes to OOP, Android Studio makes building a bit more tangible than I'm used to", "...ACTIVITIES! When thinking of security, speed, and debugging, Java was ready to the rescue. But it was interesting to pick apart some circular dependencies that were hiding in there"], project_id: p4.id)

srt5 = Stone.create(stacks: ["icons/mern-app.png", "icons/web-dev-icon.png", "icons/py-matplot.png"], racks: ["Comprehensive testing", "Client side w/ JS", "NodeJS update"], tags: ["Simple but fully developed boilerplate code to transition any prospective React app including ExpressJS and Mocha/Chai testing to layer any blindspots in full-stack development", "If client side approach to building a service, this boilerplate can help speed up the process of mapping how it can be done, since running this kind of framework can be overwhelming", "NodeJS and its package manager has come a long way in terms of just getting an app running. There're a lot more resources guiding developers through bugs and threats that old versions of packages have exposed apps to vulnerabilities in the past"], project_id: p5.id)

srt6 = Stone.create(stacks: ["icons/py-icon.png", "icons/flask-icon.png", "icons/pandas-icon.png"], racks: ["Data simplified!", "Navigate and Filter", "The 411"], tags: ["I've used Excel all through HS and College, but Pandas' and Python's ease of syntax and readability really expanded what an actual pivot table can consist of and what it could be used for", "With python's writablility and versatility through Flask, I learned that data sets of all kinds can be presented to anybody coming from any industry. Statistics is universal", "Moreover, this information can be consolidated to be useful for a certain project or goal. I used this Codecademy project as a boilerplate for my financial Hoodcast layout"], project_id: p5.id)

srt7 = Stone.create(stacks: ["icons/rust-icon.png", "icons/rust-logo.png", "icons/full-stack-icon.png"], racks: ["Rustacean Persuasion", "What does the crab say?!", "Top Rustacean Bait"], tags: ["I am officially persuaded... This compliled language has so many resources created by the Rustacean community. (upload pass: 'the-tacderan-code')", "Money, money, money! Just kidding, but I'm sure Rust is going to explode with business. Building a Rust app such as this tutorial boilerplate is comparable to the ease of developing an app using Ruby on Rails", "Im impressed with the standard documentation set up of Rust crates, allowing developers to easily understand each others packages and libraries. Such a good mix of all major programming languages"], project_id: p4.id)

srt8 = Stone.create(stacks: ["icons/mern-app.png", "icons/js-icon.png"], racks: ["First contact", "Step-by-step", "D'oh!"], tags: ["It was with the Web Development Career Path with JS where I realized such mysteries in CS but even bigger curiorsities arose to find them", "Coding javascript feels like climbing up (or down) a ladder. Descending one line at a time, you really get to see what is being done to achieve the communication between servers and clients", "The most frustrating part of JS and Node is its package manager, but I think its great to collect those series of apps you've successfully built It's definitely going to be unique. JS is definitely a trade-off between complexity and the task to make itself simple."], project_id: p6.id)

module Portfolio
  class Engine < ::Rails::Engine
    # ...
    initializer "portolio.importmap", before: "importmap" do |app|
      # ...
      app.config.importmap.cache_sweepers << Engine.root.join("app/assets/javascripts")
    end
  end
end

class Stone < ApplicationRecord
  serialize :stacks, JSON
  serialize :racks, JSON
  serialize :tags, JSON
end

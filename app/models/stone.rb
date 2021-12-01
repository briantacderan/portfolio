class Stone < ApplicationRecord
  serialize :stacks
  serialize :racks
  serialize :tags
end

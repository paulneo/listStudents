class Student < ApplicationRecord
  validates_presence_of :name,:last_name, :address, :code
end

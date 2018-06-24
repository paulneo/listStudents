class Student < ApplicationRecord
  validates_presence_of :name,:last_name, :address , :code
  geocoded_by :address
  after_validation :geocode
  def self.search(search)
    where("name  LIKE ?", "%#{search}%")

  end
end

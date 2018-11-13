class StudentSerializer < ActiveModel::Serializer

  attributes :id, :name, :last_name, :address,:latitude, :longitude, :apple_address ,:created_at, :updated_at
end

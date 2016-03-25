class Bench < ActiveRecord::Base
	validates :lng, :lat, presence: true
	
end

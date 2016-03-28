require 'byebug'

class Bench < ActiveRecord::Base
	validates :lng, :lat, presence: true


	def self.in_bounds(bounds)
		n = bounds["northEast"]["lat"].to_f
		s = bounds["southWest"]["lat"].to_f
		e = bounds["northEast"]["lng"].to_f
 		w = bounds["southWest"]["lng"].to_f

		Bench.where(lat: s..n).where(lng: w..e)

	end

end

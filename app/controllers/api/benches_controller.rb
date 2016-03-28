require 'byebug'

class Api::BenchesController < ApplicationController

	def index
		@benches = Bench.in_bounds(params[:bounds])
	end

	def create
		new_params = {}
		new_params[:lat] = bench_params["lat"].to_f
		new_params[:lng] = bench_params["lng"].to_f
		new_params[:description] = bench_params["description"]
		new_params[:seating] = bench_params["seating"].to_f
		new_bench = Bench.new(new_params)
		new_bench.save!
		render json: ""
	end

	def bench_params
		params.require(:bench).permit(:lat, :lng, :description, :seating)
	end

end

class VideosController < ApplicationController

	def new
		@video = Video.new
	end

	def create
		@video = Video.new(video_params)
		if @video.save
			redirect_to @video
		else
			render 'new'
		end
	end

	def show
		@video = Video.find(params[:id])
	end

	def edit
		@video = Video.find(params[:id])
	end

	def update
		@video = Video.find(params[:id])
		if @video.update(params[:video].permit(:titel, :video_url))
			redirect_to @video
		else
			render 'edit'
		end
	end


	def video_params
		params.require(:video).permit(:title, :video_url)
	end

end
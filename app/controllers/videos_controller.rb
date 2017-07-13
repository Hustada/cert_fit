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

	def index
		@videos = Video.all.order('created_at DESC').paginate(page: params[:page], per_page: 8)
	end

	def show
		@video = Video.find(params[:id])
		rescue ActiveRecord::RecordNotFound
  	redirect_to root_url, :flash => { :error => "Video not found." }
	end

	def edit
		@video = Video.find(params[:id])
	end

	def update
		@video = Video.find(params[:id])
		if @video.update(params[:video].permit(:title, :video_url))
			redirect_to @video
		else
			render 'edit'
		end
	end

	def destroy
		@video = Video.find(params[:id])
		@video.destroy
		redirect_to new_video_path
	end


	def video_params
		params.require(:video).permit(:title, :video_url)
	end

end
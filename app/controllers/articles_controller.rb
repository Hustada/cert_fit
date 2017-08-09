class ArticlesController < ApplicationController
	before_action :authenticate_user!, only: [:create, :update, :destroy]

	def new
		@article = Article.new
	end

	def create
		@article = Article.new(article_params)
		if @article.save
			redirect_to @article
		else
			render 'new'
		end
	end

	def show
		@article = Article.find(params[:id])
	end

	def index
		@user = current_user
		@articles = Article.paginate(page: params[:page], per_page: 15).order('created_at DESC')
		respond_to do |format|
		  format.html
		  format.js
		end
		@popular_articles = Article.all.order('created_at DESC').paginate(page: params[:page],per_page: 4)
		@recent_article = Article.order("created_at").last
	end

	def edit
		@article = Article.find(params[:id])
	end

	def update
		@article = Article.find(params[:id])
		if @article.update(params[:article].permit(:title, :body, :image)) # :header, add later
			redirect_to @article
		else
			render 'edit'
		end
	end

	def destroy
		@article = Article.find(params[:id])
		@article.destroy
		redirect_to articles_path
	end

	def truncation
		@articles = Article.all.truncate(40)
	end


private

	def article_params
		params.require(:article).permit(:title, :body, :image)  #add these later :header, :video_url
	end
end

class CallbacksController < Devise::OmniauthCallbacksController
	before_action :authenticate_user!
  
	def facebook
		@user = User.from_omniauth(request.env["omniauth.auth"])
		if @user.persisted?
			flash[:notice] = "Signed in Successfully"
			sign_in_and_redirect @user
		elsif User.exists?
			flash[:notice] = "User already exists"
			redirect_to root_path
		end
	end

	def twitter
		@user = User.from_omniauth(request.env["omniauth.auth"])
		sign_in_and_redirect @user
	end

	def google_oauth2
		@user = User.from_omniauth(request.env["omniauth.auth"])
		if @user.persisted?
			flash[:notice] = "Signed in Successfully"
			sign_in_and_redirect @user
		elsif User.exists?
			flash[:notice] = "User already exists"
			redirect_to root_path
		end
	end
end
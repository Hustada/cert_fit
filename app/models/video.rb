class Video < ApplicationRecord
	validates :title, presence: true, length: { minimum: 8 }
	validates :video_url, presence: true


	@@video_regexp = [ /^(?:https?:\/\/)?(?:www\.)?youtube\.com(?:\/v\/|\/watch\?v=)([A-Za-z0-9_-]{11})/, 
                   /^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([A-Za-z0-9_-]{11})/,
                   /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/user\/[^\/]+\/?#(?:[^\/]+\/){1,4}([A-Za-z0-9_-]{11})/,
                   /^(?:https?:\/\/)?(?:www\.)?youtube\.com(?:\/v\/|\/watch\?v=)([A-Za-z0-9_-]{11}\D[a-zA-Z]\D\w\w\w\D)/
                   ]

	def video_id
  	@@video_regexp.each { |m| return m.match(video_url)[1] unless m.nil? }
	end

	def previous_video
		Video.where(["id < ?", id]).last
	end

	def next_video
		Video.where(["id > ?", id]).first
	end

end
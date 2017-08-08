class Article < ApplicationRecord
	self.per_page = 10
	validates :title, presence: true, length: { minimum: 5 }
	validates :body,  presence: true
	# has_attached_file :image, styles: { large: "600X600#", medium: "300X300>", thumb: "150X150#"}
	# validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
	# has_attached_file :header, styles: { large: "900X900#", medium: "300X300>", thumb: "150X150#"}
	# 																	 # :convert_options => { :large => "-quality 92" }
	# validates_attachment_content_type :header, content_type: /\Aimage\/.*\z/
	belongs_to :user

	@@video_regexp = [ /^(?:https?:\/\/)?(?:www\.)?youtube\.com(?:\/v\/|\/watch\?v=)([A-Za-z0-9_-]{11})/, 
                   /^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([A-Za-z0-9_-]{11})/,
                   /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/user\/[^\/]+\/?#(?:[^\/]+\/){1,4}([A-Za-z0-9_-]{11})/
                   ]


  def timestamp
	  created_at.strftime('%d %B %Y %H:%M:%S')
	end

	def video_id
  	@@video_regexp.each { |m| return m.match(video_url)[1] unless m.nil? }
	end
end

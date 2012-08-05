require "rubygems"
require "rack"
run Rack::File.new(
  File.join( File.dirname(__FILE__), "/public")
)

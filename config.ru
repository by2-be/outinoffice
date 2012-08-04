require "rubygems"
require "rack"
run Rack::File.new(File.dirname(__FILE__))

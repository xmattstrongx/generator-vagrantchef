# Encoding: UTF-8
#
# Cookbook Name:: <%= name %>
# Recipe:: create_file
#

file '/tmp/demo.static' do
  content 'This file generated by Chef'
  action :create
end
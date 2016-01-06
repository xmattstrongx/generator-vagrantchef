# Encoding: UTF-8
#
# Cookbook Name:: <%= name %>
# Recipe:: template_file
#

template '/tmp/demo.dynamic' do
  source 'demo.erb'
  action :create
  variables({
      :color => node[:<%= name %>][:color]
  })
end

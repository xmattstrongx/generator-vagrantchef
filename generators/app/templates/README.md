<%= name %>
===========

Installation / Development
--------------------------

Requirements: 
    
* Ruby
* Vagrant
* [KitchenCI](http://kitchen.ci/) (installaion instructions below)

First, install [KitchenCI](http://kitchen.ci/):

    $ gem install test-kitchen

Then, install the Kitchen driver you are going to use (We'll use Vagrant)
    
    $ gem install kitchen-vagrant

Finally, use Kitchen to provision and start a VM. 

    $ kitchen test           # Full end-to-end test

`test` runs all the steps, but you can run partial steps during development since it's faster. 

    $ kitchen create         # Bring up a VM
    $ kitchen converge       # Make a chef-client run
    $ kitchen login          # SSH in to the VM


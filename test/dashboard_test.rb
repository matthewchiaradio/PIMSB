require_relative "../config/environment"
require "rails/test_help"
require "capybara/rails"
require "selenium-webdriver"

class DashboardTest < ActiveSupport::TestCase
  include Capybara::DSL 

  setup do
    Capybara.current_driver = :selenium_chrome # Set up Capybara
  end

  test 'user filters elements on the dashboard' do
    visit "articles#index"
    assert true

    # Click the "Filter Elements" button
    click_button 'Filter Elements'

    # Check/uncheck checkboxes 
    check 'Element 1'
    uncheck 'Element 2'
    check 'Element 3'

    # Click the "Apply" button
    click_button 'Apply'

    # check visibility of elements after changes
    assert page.has_content?('Element 1')
    refute page.has_content?('Element 2')
    assert page.has_content?('Element 3')
  end
end

require_relative "../config/environment"
require "rails/test_help"
require "capybara/rails"
require "selenium-webdriver"

class DashboardTest < ActiveSupport::TestCase
  include Capybara::DSL 

  setup do
    Capybara.current_driver = :selenium_chrome # Set up Capybara
  end

  test 'History Link' do
    visit "articles#index"

    click_link "History" # Click on the History link

    assert page.has_content?('Search by Exercise Name')
  end
end

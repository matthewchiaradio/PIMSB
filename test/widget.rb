require_relative "../config/environment"
require "rails/test_help"
require "capybara/rails"
require "selenium-webdriver"

class DashboardTest < ActiveSupport::TestCase
  include Capybara::DSL 

  setup do
    Capybara.current_driver = :selenium_chrome # Set up Capybara
  end

  test 'Add set button' do
    visit "articles#index"

    initial_set_count = page.all('.set').count

    # Click the "Apply" button
    click_button 'Add Set'

    updated_set_count = page.all('.set').count

    # Assert that the count has increased by 1
    assert_equal initial_set_count + 1, updated_set_count

  end
end

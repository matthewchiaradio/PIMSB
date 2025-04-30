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

  test 'user filters elements on the dashboard' do
    visit "articles#index"
    assert true

    # Click the "Filter Elements" button
    click_button 'Filter Elements'

    # Check/uncheck checkboxes 
    check 'Weight Lifting Tracker'
    uncheck 'Cardio Tracker'

    # Click the "Apply" button
    click_button 'Apply'

    # check visibility of elements after changes
    assert page.has_content?('Weight Lifting Tracker')
    refute page.has_content?('Cardio Tracker')
  end

  test 'History Link' do
    visit "articles#index"

    click_link "History" # Click on the History link

    assert_text "Search by Exercise Name:", wait: 5
  end
end

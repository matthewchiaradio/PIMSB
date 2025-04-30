require_relative "../config/environment"
require "rails/test_help"
require "capybara/rails"
require "capybara/rspec"
require "selenium-webdriver"
require "logger"

class DashboardTest < ActiveSupport::TestCase
  include Capybara::DSL 

  setup do
    Capybara.current_driver = :selenium_chrome # Set up Capybara
  end

  test 'Variable Rounding Test' do
    visit "articles#index"

    fill_in 'Minutes', with: 5.5
    fill_in 'Seconds', with: 23.3
    fill_in 'Intensity', with: 3.5

    find_by_id('addCardio').click

    sleep 1

    javascript_code = <<~JS
      var minutes = parseInt(document.querySelector(".minutes").value);
      var seconds = parseInt(document.querySelector(".seconds").value);
      var intensity = document.querySelector(".intensity").value;

      return { minutes, seconds, intensity };
    JS

    values = execute_script(javascript_code)

    puts "#{values['minutes']}"
    puts "#{values['seconds']}"
    puts "#{values['intensity']}"

    assert_equal("#{values['minutes']}", "5")
    assert_equal("#{values['seconds']}", "23")
    assert_equal("#{values['intensity']}", "3.5")
  end
end

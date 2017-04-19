class FunnelsController < ApplicationController
  def index
    start_date = params[:start_date]
    end_date = params[:end_date]

    @funnel = {}

    @funnel['quiz_started'] = Applicant.where(:workflow_state => 'quiz_started').count
    @funnel['applied'] = Applicant.where(:workflow_state => 'applied').count
    @funnel['quiz_completed'] = Applicant.where(:workflow_state => 'quiz_completed').count
    @funnel['onboarding_requested'] = Applicant.where(:workflow_state => 'onboarding_requested').count
    @funnel['onboarding_completed'] = Applicant.where(:workflow_state => 'onboarding_completed').count
    @funnel['hired'] = Applicant.where(:workflow_state => 'hired').count

    # respond_to do |format|
    #   format.html { @chart_funnel = formatted_funnel }
    #   format.json { render json: @funnel }
    # end

    render json: @funnel
  end

  private

  # generates a formatted version of the funnel for display in d3
  def formatted_funnel
    formatted = Hash.new { |h, k| h[k] = [] }

    @funnel.each do |date, state_counts|
      state_counts.each do |state, count|
        formatted[state] << {label: date, value: count}
      end
    end

    formatted.map do |k, v|
      {
        key: k.humanize,
        values: v
      }
    end
  end
end

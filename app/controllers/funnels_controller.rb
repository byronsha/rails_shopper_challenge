class FunnelsController < ApplicationController
  def index
    @funnel = formatted_funnel(params[:start_date], params[:end_date])
    render json: @funnel
  end

  private

  def formatted_funnel(start_date, end_date)
    formatted_funnel = {}
    funnel = Applicant.group_by_week(:updated_at, format: '%Y-%m-%d').group(:workflow_state).count

    funnel.each do |key, value|
      week = key[0]
      week += '-' + Date.parse(week).days_since(6).strftime('%F')
      workflow_state = key[1]

      if formatted_funnel[week].nil?
        formatted_funnel[week] = {}
        formatted_funnel[week][workflow_state] = value
      else
        formatted_funnel[week][workflow_state] = value
      end
    end
    formatted_funnel
  end
end

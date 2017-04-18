class ApplicantsController < ApplicationController
  def create
    @applicant = Applicant.new(applicant_params)
    
    if @applicant.save
      render :created
    else
      render json: { errors: @applicant.errors.full_messages }, status: 422
    end
  end

  def update
    @applicant = Applicant.find(params[:id])

    return not_found if @applicant.nil?

    if @applicant.update(applicant_params)
      render :updated
    else
      render json: { errors: @applicant.errors.full_messages }, status: 422
    end
  end

  def show
    @applicant = Applicant.find(params[:id])
  end

  private

  def applicant_params
    params.require(:applicant).permit(
      :first_name,
      :last_name,
      :region,
      :phone,
      :email,
      :phone_type,
      :source,
      :over_21,
      :reason,
      :workflow_state,
      :created_at,
      :updated_at
    )
  end
end

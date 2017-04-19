json.applicant do
  json.partial! "applicants/applicant", applicant: @applicant
end

json.success ["Application submitted!"]
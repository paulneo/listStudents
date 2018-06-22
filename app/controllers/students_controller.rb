class StudentsController < ApplicationController
  before_action :authenticate_user!
  before_action :find_student, only: [:show,:edit,:update,:destroy]

  def index
    @students = Student.all
  end

  def show

  end

  def new
    @student = Student.new

  end

  def create
    @student = Student.new(student_params)
    if @student.save
      redirect_to  @student
    else
      render :new
    end
  end

  def edit

  end

  def update
    if @student.update student_params
      redirect_to @student
    else
      render :edit
    end
  end

  def destroy
    @student.destroy
    redirect_to students_path
  end

  private

  def find_student
    @student = Student.find(params[:id])
  end

  def student_params
    params.require(:student).permit(:name,:last_name, :address,:code, :number_address, :apple_address )
  end
end

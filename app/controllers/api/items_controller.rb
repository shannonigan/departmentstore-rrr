class Api::ItemsController < ApplicationController
  before_action :set_department
  before_action :set_item, only: [:show, :update, :destroy]


  def index
    render json: @department.items
  end

  def show
    render json: @item
  end

  def create
    item = @department.item.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: 422
    end
  end

  def update
    if @item.update(item_params)
      render json: @item
    else
      render json: @item.errors, status: 422
    end
  end

  def destroy
    @item.destroy
    # render json: { message: "Item deleted"}
  end

  private
  def item_parmas
    params.require(:item).permit(:name, :price)
  end

  def set_department
    @department = Department.find(params[:department_id])
  end

  def set_item
    @item = @department.items.find(params[:id])
  end
  
end


class Api::ItemsController < ApplicationController
  before_action :set_department
  before_action :set_item, only: [:show, :update, :destroy]


  def index
    render json: @department.items
  end

  def show
    render json: @department.item
  end

  def create
    item = @department.item.new(item_parmas)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity
    end
  end

  def update
    @item.update(complete: !item.complete)
    render json: @item
  end

  def destroy
    @item.destroy
    render json: { message: "Item deleted"}
  end

  private
  def item_parmas
    params.require(:item).permit(:name, :price)
  end

  def set_department
    @department = Department.find(params[:department_id])
  end

  def set_item
    @item = Item.find(params[:id])
  end
  
end


import OrderModel from "../models/orderSchema.js";



export const getAllOrders = async (req, res, next) => {
    try {
      const allOrders = await OrderModel.find();
      res.send(allOrders);
    } catch (err) {
      next(err);
    }
  };
  export const getSingleOrders= async (req, res, next) => {
    try {
      const singleOrder = await OrderModel.findById(req.params.id);
      res.send(singleOrder);
    } catch (err) {
      next(err);
    }
  };
  
  export const createOrders = async (req, res, next) => {
    try {
      const order = await OrderModel.create(req.body);
      res.send(order);
    } catch (err) {
      next(err);
    }
  };
  
  export const updateOrders = async (req, res, next) => {
    try {
      const updatedOrder = await OrderModel.updateOne(
        req.params.id,
        req.body,
        { new: true }
      );
      res.send(updatedOrder);
    } catch (err) {
      next(err);
    }
  };
  export const deleteOrders = async (req, res, next) => {
    try {
      const deleteOrders = await OrderModel.findByIdAndDelete(req.params.id);
      res.send(deleteOrders);
    } catch (err) {
      next(err);
    }
  };
  
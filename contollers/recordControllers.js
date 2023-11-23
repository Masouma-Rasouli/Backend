import RecordsModel from "../models/recordsSchema.js";

export const getAllRecords = async (req, res, next) => {
  try {
    const allRecords = await RecordsModel.find();
    res.send(allRecords);
  } catch (err) {
    next(err);
  }
};
export const getSingleRecords = async (req, res, next) => {
  try {
    const singleRecord = await RecordsModel.findById(req.params.id);
    res.send(singleRecord);
  } catch (err) {
    next(err);
  }
};

export const createRecords = async (req, res, next) => {
  try {
    const record = await RecordsModel.create(req.body);
    res.send(record);
  } catch (err) {
    next(err);
  }
};

export const updateRecords = async (req, res, next) => {
  try {
    const updatedRecord = await RecordsModel.updateOne(
      req.params.id,
      req.body,
      { new: true }
    );
    res.send(updatedRecord);
  } catch (err) {
    next(err);
  }
};
export const deleteRecords = async (req, res, next) => {
  try {
    const deletedRecord = await RecordsModel.findByIdAndDelete(req.params.id);
    res.send(deletedRecord);
  } catch (err) {
    next(err);
  }
};

const ExpenseSchema = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  let { title, amount, category, description, date } = req.body;

  amount = +amount;

  const expense = new ExpenseSchema({
    title,
    amount,
    category,
    description,
    date,
  });
  try {
    //validations
    if (!title || !amount || !category || !description || !date) {
      return res.status(400).json({
        message: "Please fill all the fields",
      });
    }

    if (amount <= 0 || typeof amount !== "number") {
      return res.status(400).json({
        message: "Wrong amount type or les then 0",
      });
    }
    await expense.save();
    res.status(200).json({
      message: "Expense added successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in add expense",
    });
  }
};

exports.getExpenses = async (req, res) => {
  try {
    const expenses = await ExpenseSchema.find().sort({ createdAt: -1 });
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({
      message: "Error in get expenses",
    });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    ExpenseSchema.findByIdAndDelete(id).then((expense) => {
      res.status(200).json({ message: "Expense delited" });
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in delete Expense",
    });
  }
};

const IcomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) =>{
    let {title, amount, category, description, date} = req.body;

    amount = +amount

    const income = new IcomeSchema({title, amount, category, description, date});
    try {
        //validations
        if(!title || !amount || !category || !description || !date){
            return res.status(400).json({
                message: 'Please fill all the fields'
            })
        }
        
        if(amount <=0 || typeof amount !== 'number'){
            return res.status(400).json({
                message: 'Wrong amount type or les then 0'
            })
        }
        await income.save()
        res.status(200).json({
            message: 'Income added successfully'
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error in add income'
        })
    }
}

exports.getIncomes = async (req, res) => {
    try {
        const incomes = await IcomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({
            message: 'Error in get incomes'
        })
    }
}

exports.deleteIncome = async (req, res) => {
    const {id}=req.params
    try {
        IcomeSchema.findByIdAndDelete(id).then((income)=>{

            res.status(200).json({message: 'Income delited'})
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error in delete income'
        })
    }
}
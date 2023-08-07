import Employees from "../modals/empModal.js"
let EmployeesObj = {}

export const renderEmp = async (req,res) =>{
    const employee = await Employees.find({}).exec();
    return res.render('empMaster',{employee})
}

export const renderAddEmp = async (req,res) =>{
    return res.render('addEmployee', {error : null})
}


export const addEmp = async (req,res) => {
    try{
        const{empName, empSalary, empEmail} = req.body
        if(!empName) return res.render('addEmployee',{error:"Employee name is required!"})
        if(!empSalary) return res.render('addEmployee',{error:"Employee salary is required!"})
        if(!empEmail) return res.render('addEmployee',{error:"Employee email is required!"})

        const isEmpAvailable = await Employees.findOne({empEmail}).exec();
        if(isEmpAvailable) return res.render('addEmployee',{error:"Employee already exist!"})

        const employee = new Employees({
            empName, empEmail, empSalary
        })
        await employee.save();
        return res.redirect('/empMaster')

    }catch(err){
        return res.send(err)
    }
}

export const empDetails = async (req,res) =>{
    try {
        const id = req.params.id
        const employee = await Employees.findById({ _id: id }).exec();
        return res.render('empMaster', { employee })
    } catch (err) {
        return res.send(err)
    }
}

export const renderUpdateEmp = async (req, res) => {
    try {
        const id = req.params.id
        const employee = await Employees.findById({ _id: id }).exec();
        return res.render('empMaster', { employee, error: null })

    } catch (err) {
        return res.send(err)
    }
}

export const updateEmp = async (req,res) => {
    try {
        let id = req.params.id;
        const { empName,empEmail,empSalary } = req.body;
        const employee = await Employees.findById({ _id: id }).exec();
        if (employee.empEmail == empEmail) { return res.status(400).json({ message: "Employee already exist!" }) };
        const updateEmp = await Employees.findByIdAndUpdate({ _id: id }, { $set: { empName, empSalary, empEmail } }).exec();
        await updateEmp.save();
        return res.redirect('/empMaster')


    } catch (err) {
        return res.send(err);
    }
}

export const renderDeleteEmp = async (req,res) =>{
    try{
        const id = req.params.id;
        const employee = await Employees.findById({_id: id}).exec();
        if(!employee) return res.render('empMaster')
        return res.render('empMaster',{employee})
    }catch(err){
        return res.send(err)
    }
}

export const deleteEmp = async (req,res) => {
    try {
        let id = req.params.id;
        const employee = await Employees.findOneAndDelete({ _id: id }).exec();
        await employee.save();
        return res.redirect('/empMaster')

    } catch (err) {
        return res.send(err);
    }
}
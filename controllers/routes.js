const express = require("express");
const router = express.Router()
const Employee = require('../models/connection.model')

router.get('/add-emp', (req, res) => {
   res.render("addemp")
});

router.post("/save-emp", async (req, res) => {
   try {
      console.log("Received data from form:", req.body);

      const Emp = new Employee({
         fullname: req.body.fullname,
         email: req.body.email,
         phone: req.body.phone,
         city: req.body.city
      });


      await Emp.save();
      res.redirect("/");

   } catch (error) {
      console.log(error);

      res.status(500).send("Failed to save employee");
   }

});
// show data
router.get('/show-all-emp', async (req, res) => {
   try {
      const result = await Employee.find()
      //console.log(result);

      res.render("showEmp", { list: result })
   } catch (error) {
      console.log(error);

   }
});

//delete

router.get('/delete-all-Emp', async (req, res) => {
   try {
      const result = await Employee.find()
      //   console.log(result);

      res.render('deleteEmp', { list: result });

   } catch (error) {
      console.log(error)
   }
});

router.get('/final-delete/:uid', async (req, res) => {
   try {
      const result = await Employee.findByIdAndDelete(req.params.uid);
      res.redirect('/emp/delete-all-emp');
   } catch (error) {
      console.log(error);

   }
});

//update

router.get('/updateEmploye', async (req, res) => {
   try {
      let emp = await Employee.find();
      // let empdata = emp.map(empdata => empdata.toObject());
      res.render("updateEmployee", { emp });
   } catch (err) {
      console.log(err)
   }
});


router.get("/editEmployee/:id", async(req, res)=>{
   try{
       // console.log(req.params.id)
       let employee = await Employee.findById(req.params.id);
       console.log(employee)
       res.render("editEmployee", {employee});
   }catch(err){
       console.log(err)
   }
});

router.post('/updateEmp/:id', async (req, res) => {
   try {
       const editEmp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
      //  console.log("Updated Employee:", editEmp);
       res.redirect('/emp/show-all-emp');
   } catch (error) {
       console.log(error);
       res.status(500).send("Failed to update employee");
   }
});






module.exports = router



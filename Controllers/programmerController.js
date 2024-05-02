import Programmers from "../Models/index.js";

//create a new programmer
export const CreateProgrammer = async (req, res) => {
  const newUser = new Programmers(req.body);
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// get the data of alll the programmers
export const getAllProgrammers = async (req, res) => {
  try {
    const programmers = await Programmers.find();
    res.status(200).json(programmers);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get a particular programmer
export const getAProgrammer = async (req, res) => {
  try {
    const programmer = await Programmers.findById(req.params.id);
    res.status(200).json(programmer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update programmer's data
export const updateProgrammer = async (req, res) => {
    try {
      const programmer = await Programmers.findByIdAndUpdate(req.params.id, req.body, {new: true});
      res.status(200).json(programmer);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //delete a programmer
  export const deleteProgrammer = async (req, res) => {
    try {
     await Programmers.findByIdAndDelete(req.params.id);
      res.status(200).json("programmer deleted");
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };  
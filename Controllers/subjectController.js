import Subject from "../models/Subject.js";

// Create a new subject (Admin only)
export const createSubject = async (req, res) => {
  try {
    const { name, code, createdBy } = req.body;

    const subject = new Subject({ name, code, createdBy });
    await subject.save();

    res.status(201).json({ message: "Subject created successfully", subject });
  } catch (error) {
    res.status(500).json({ message: "Error creating subject", error: error.message });
  }
};

// Get all subjects
export const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching subjects", error: error.message });
  }
};







// import Subject from "../models/Subject.js";

// // Create a new subject
// const createSubject = async (req, res) => {
//     const { name, code, createdBy } = req.body;
//     try {
//         const subject = new Subject({ name, code, createdBy });
//         await subject.save();
//         res.status(201).json({ message: "Subject created successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get all subjects
// const getSubjects = async (req, res) => {
//     try {
//         const subjects = await find();
//         res.status(200).json(subjects);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export default { createSubject, getSubjects };

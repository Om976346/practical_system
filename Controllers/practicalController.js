import Practical from "../models/Practical.js";

// Create a new practical (Teacher only)
export const createPractical = async (req, res) => {
  try {
    const { subjectId, title, description, createdBy } = req.body;

    const practical = new Practical({ subjectId, title, description, createdBy });
    await practical.save();

    res.status(201).json({ message: "Practical created successfully", practical });
  } catch (error) {
    res.status(500).json({ message: "Error creating practical", error: error.message });
  }
};

// Get all practicals
export const getPracticals = async (req, res) => {
  try {
    const practicals = await Practical.find().populate("subjectId").populate("enrolledStudents");
    res.status(200).json(practicals);
  } catch (error) {
    res.status(500).json({ message: "Error fetching practicals", error: error.message });
  }
};

// Enroll a student in a practical
export const enrollPractical = async (req, res) => {
  try {
    const { practicalId, studentId } = req.body;

    const practical = await Practical.findById(practicalId);
    if (!practical) {
      return res.status(404).json({ message: "Practical not found" });
    }

    // Check if student is already enrolled
    if (practical.enrolledStudents.includes(studentId)) {
      return res.status(400).json({ message: "Student already enrolled" });
    }

    practical.enrolledStudents.push(studentId);
    await practical.save();

    res.status(200).json({ message: "Student enrolled successfully", practical });
  } catch (error) {
    res.status(500).json({ message: "Error enrolling student", error: error.message });
  }
};







// import Practical from "../models/Practical.js";
// // import Practical, { find } from "../models/Practical.js";

// // Create a practical
// const createPractical = async (req, res) => {
//     const { subjectId, title, description, createdBy } = req.body;
//     try {
//         const practical = new Practical({ subjectId, title, description, createdBy });
//         await practical.save();
//         res.status(201).json({ message: "Practical created successfully" });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// // Get all practicals
// const getPracticals = async (req, res) => {
//     try {
//         const practicals = await find().populate("subjectId").populate("enrolledStudents");
//         res.status(200).json(practicals);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// export default { createPractical, getPracticals };

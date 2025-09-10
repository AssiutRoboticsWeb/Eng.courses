const asyncHandler = require('../utils/asyncHandler');
const AppError = require('../utils/AppError');
const { Track, YearSchema } = require('../models/track');
const Subject = require('../models/subject');
const mongoose = require('mongoose');


const getAllTracks = asyncHandler(async (req, res) => {   
    const tracks = await Track.find({})
        .populate({
            path: 'years.firstSemester.subjects',
            model: 'Subject',
            select: '_id name description'
        })
        .populate({
            path: 'years.secondSemester.subjects',
            model: 'Subject',
            select: '_id name description'
        });

    res.status(200).json({
        status: true,
        message: "Tracks fetched successfully",
        data: tracks
    });
});


const getTrackById = asyncHandler(async (req, res) => {
    const trackId = req.params.id;
    const track = await Track.findById(trackId)
        .populate({
            path: 'years.firstSemester.subjects',
            model: 'Subject',
            select: '_id name description'
        })
        .populate({
            path: 'years.secondSemester.subjects',
            model: 'Subject',
            select: '_id name description'
        });

    if (!track) {
        throw new AppError("Track not found", 404);
    }

    res.status(200).json({
        status: true,
        message: "Track fetched successfully",
        data: track
    });
});


const addTrack = asyncHandler(async (req, res) => {
    const { name, type } = req.body;

    if (!name) throw new AppError("name is required", 400);
    if (!type) throw new AppError("type is required", 400);

    // add 5 years by default
    let years = [];
    for (let i = 0; i < 5; i++) {
        years.push({
            name: `Year ${i + 1}`,
            firstSemester: { subjects: [] },
            secondSemester: { subjects: [] }
        });
    }

    const newTrack = new Track({ name, type, years });
    await newTrack.save();

    res.status(201).json({
        status: true,
        message: "Track created successfully",
        data: newTrack
    });
});


const editTrack = asyncHandler(async (req, res) => {
    const trackId = req.params.id;
    const { name, type } = req.body;

    if (!name) throw new AppError("name is required", 400);
    if (!type) throw new AppError("type is required", 400);

    let updatedTrack = await Track.findByIdAndUpdate(
        trackId,
        { name, type },
        { new: true } 
    )
    .populate('years.firstSemester.subjects')
    .populate('years.secondSemester.subjects');

    if (!updatedTrack) {
        throw new AppError("Track not found", 404);
    }

    res.status(200).json({
        status: true,
        message: "Track updated successfully",
        data: updatedTrack
    });
});


const deleteTrack = asyncHandler(async (req, res) => {
    const trackId = req.params.id;
    const track = await Track.findById(trackId);

    if (!track) throw new AppError("Track not found", 404);

    await track.deleteOne();

    res.status(200).json({
        status: true,
        message: "Track deleted successfully",
        data: track
    });
});


const addSubjectToTrack = asyncHandler(async (req, res) => {
  const { trackId, yearNumber, semester, subjectId } = req.body;

  if (!trackId || !yearNumber || !semester || !subjectId) {
    throw new AppError("trackId, yearNumber, semester, subjectId are required", 400);
  }

  if (!mongoose.Types.ObjectId.isValid(trackId) || !mongoose.Types.ObjectId.isValid(subjectId)) {
    throw new AppError("Invalid trackId or subjectId format", 400);
  }

  const track = await Track.findById(trackId);
  if (!track) throw new AppError("Track not found", 404);

  const subject = await Subject.findById(subjectId);
  if (!subject) throw new AppError("Subject not found", 404);

  const yearIndex = yearNumber - 1;
  if (yearIndex < 0 || yearIndex >= track.years.length) {
    throw new AppError("Invalid year number", 400);
  }

  const year = track.years[yearIndex];


  if (!["firstSemester", "secondSemester"].includes(semester)) {
    throw new AppError("semester must be firstSemester or secondSemester", 400);
  }


  if (!year[semester].subjects.map(String).includes(String(subjectId))) {
    year[semester].subjects.push(subjectId);
    await track.save();
  }

  const populatedTrack = await Track.findById(trackId)
    .populate('years.firstSemester.subjects', '_id name description')
    .populate('years.secondSemester.subjects', '_id name description');

  res.status(200).json({
    status: true,
    message: "Subject added to Track successfully",
    data: {
      track: populatedTrack,
      subject
    }
  });
});



module.exports = {
    addTrack,
    editTrack,
    deleteTrack,
    getAllTracks,
    getTrackById,
    addSubjectToTrack
};

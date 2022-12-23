const Course = require("../models/Course");
const User = require("../models/User");

async function getAllForGuests() {
    return Course.find({}).sort({usersEnrolled: -1}).limit(3).lean();
}

async function getAllForUsers() {
    return Course.find({}).sort({createdAt: 1}).lean();
}

async function getById(id) {
    return Course.findById(id).lean();
}

async function getByUserBooking(userId) {
    return (await Course.find({bookings: userId}).lean());
}

async function create(course) {
    return await Course.create(course);
}

async function update(id, course) {
    const existing = await Course.findById(id);

    existing.title = course.title;
    existing.description = course.description;
    existing.imageUrl = course.imageUrl;
    existing.duration = course.duration;

    await existing.save();
}

async function deleteById(id) {
    await Course.findByIdAndRemove(id);
}

async function enrollInCourse(courseId, userId) {
    const course = await Course.findById(courseId);
    const user = await User.findById(userId);
    
    course.usersEnrolled.push(userId);
    user.enrolledCourses.push(course._id);

    await course.save();
    await user.save();
}

module.exports = {
    getAllForGuests,
    getAllForUsers,
    getById,
    create,
    update,
    deleteById,
    enrollInCourse,
    getByUserBooking
};
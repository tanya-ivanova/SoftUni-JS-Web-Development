const { getAllForUsers, create, getById, update, deleteById, enrollInCourse } = require('../services/courseService');
const { parseError } = require('../util/parser');

const courseController = require('express').Router();


courseController.get('/', async (req, res) => {
    const courses = await getAllForUsers();

    res.render('userHome', {
        title: 'Home Page',
        courses        
    });
});

courseController.get('/:id/details', async (req, res) => {
    const course = await getById(req.params.id);

    if (course.owner == req.user._id) {
        course.isOwner = true;
    } else if (course.usersEnrolled.map(x => x.toString()).includes(req.user._id.toString())) {
        course.isEnrolled = true;
    }

    res.render('details', {
        title: 'Course Details',
        course
    });
});

courseController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Course'
    });
});

courseController.post('/create', async (req, res) => {
    const course = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration,
        owner: req.user._id,
        createdAt: Date.now()
    };

    try {
        if (Object.values(course).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await create(course);
        res.redirect('/course');

    } catch (error) {
        res.render('create', {
            title: 'Create Course',
            body: course,
            errors: parseError(error)
        });
    }
});

courseController.get('/:id/edit', async (req, res) => {
    const course = await getById(req.params.id);

    if (course.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    res.render('edit', {
        title: 'Edit Course',
        course
    });
});

courseController.post('/:id/edit', async (req, res) => {
    const course = await getById(req.params.id);

    if (course.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    const edited = {
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        duration: req.body.duration
    };

    try {
        if (Object.values(edited).some(v => !v)) {
            throw new Error('All fields are required');
        }

        await update(req.params.id, edited);
        res.redirect(`/course/${req.params.id}/details`);

    } catch (error) {
        res.render('edit', {
            title: 'Edit Course',
            course: Object.assign(edited, { _id: req.params.id }),
            errors: parseError(error)
        });
    }
});

courseController.get('/:id/delete', async (req, res) => {
    const course = await getById(req.params.id);

    if (course.owner != req.user._id) {
        return res.redirect('/auth/login');
    }

    await deleteById(req.params.id);
    res.redirect('/course');

});

courseController.get('/:id/enroll', async (req, res) => {
    const course = await getById(req.params.id);
    console.log(course);
    try {
        if (course.owner == req.user._id) {
            course.isOwner = true;
            throw new Error('Cannot enroll your own course');
        }

        if(course.usersEnrolled.map(x => x.toString()).includes(req.user._id.toString())) {
            course.isBooked = true;
            throw new Error('Cannot enroll twice');
        }

        await enrollInCourse(req.params.id, req.user._id);
        res.redirect(`/course/${req.params.id}/details`);

    } catch (error) {
        res.render('details', {
            title: 'Course Details',
            course,
            errors: parseError(error)
        });
    }
});

module.exports = courseController;
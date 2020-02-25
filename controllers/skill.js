const Skill = require('../models/skills');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
};

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

function create(req, res) {
   console.log(req.body);
   req.body.done = false;
   Skill.create(req.body.skill);
   res.redirect('/skills');
 }

function newSkill(req, res) {
    res.render('skills/new', {
        title: "My New Skill"
    })
}

function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: "My Skills"
    })
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne()
    })
}
const skills = ['fullstack developer', 'graphic design', 'considerate', 'all around AWESOME!'];

function getAll() {
    return skills;
}

function getOne(id) {
    return skills[id];
}

function create(skill) {
    skills.push(skill);
}

function deleteOne(id) {
    skills.splice(id, 1);
}

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};


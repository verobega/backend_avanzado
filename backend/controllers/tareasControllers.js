const getTareas = (req, res) => {
    res.status(200).json({ message: 'obtener lista de tareas' });
};
const createTareas = (req, res) => {
    res.status(201).json({ message: 'crear una tarea' });
}
const updateTareas = (req, res) => {
    res.status(200).json({ message: `modificar tarea ${req.params.id}` });
}
const deleteTareas = (req, res) => {
    res.status(200).json({ message: `eliminar tarea ${req.params.id}` });
}

module.exports = {
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}
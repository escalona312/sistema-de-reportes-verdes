const db = require('../models/db');

exports.getAllReports = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM reports');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createReport = async (req, res) => {
    const { type, location, description } = req.body;
    try {
        await db.query(
            'INSERT INTO reports (type, location, description, status) VALUES (?, ?, ?, "Pendiente")',
            [type, location, description]
        );
        res.status(201).json({ message: 'Reporte creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.updateReportStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    try {
        await db.query('UPDATE reports SET status = ? WHERE id = ?', [status, id]);
        res.json({ message: 'Estado actualizado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

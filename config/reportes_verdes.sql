CREATE DATABASE IF NOT EXISTS reportes_verdes;
USE reportes_verdes;

CREATE TABLE IF NOT EXISTS reports (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(100) NOT NULL,
    location VARCHAR(255) NOT NULL,
    description TEXT,
    status ENUM('Pendiente', 'En proceso', 'Resuelto') DEFAULT 'Pendiente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

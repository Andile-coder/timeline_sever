CREATE TABLE event_images (
    image_id INT PRIMARY KEY,
    event_id INT,
    image_url VARCHAR(255),
    FOREIGN KEY (event_id) REFERENCES events(event_id),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
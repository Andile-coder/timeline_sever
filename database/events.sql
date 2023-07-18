CREATE TABLE IF NOT EXISTS events (
    event_id VARCHAR(100) PRIMARY KEY,
    timeline_id VARCHAR(100),
    user_id VARCHAR(100),
    title VARCHAR(100),
    status_id INT,
    category_id VARCHAR(255),
    event_date DATE,
    y_axis VARCHAR(100),
    description TEXT,
    FOREIGN KEY (timeline_id) REFERENCES timelines(timeline_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (status_id) REFERENCES statuses(status_id),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
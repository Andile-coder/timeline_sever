CREATE TABLE IF NOT EXISTS events (
    event_id VARCHAR(100) PRIMARY KEY,
    timeline_id VARCHAR(100),
    user_id VARCHAR(100),
    title VARCHAR(100),
    status_id INT,
    category_id INT,
    description TEXT,
    FOREIGN KEY (timeline_id) REFERENCES timelines(timeline_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id),
    FOREIGN KEY (status_id) REFERENCES statuses(status_id),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
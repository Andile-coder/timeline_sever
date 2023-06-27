CREATE TABLE IF NOT EXISTS timelines (
    timeline_id VARCHAR(100) PRIMARY KEY,
    user_id VARCHAR(100),
    status_id INT,
    title VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (status_id) REFERENCES statuses(status_id),
   created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_updated_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
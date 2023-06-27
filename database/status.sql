INSERT INTO statuses (status_id, name, description, created_on, last_updated_on)
VALUES 
  (1, 'APPROVED', 'Approved status description', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'PUBLISHED', 'Published status description', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'CANCELLED', 'Cancelled status description', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'PENDING', 'Pending status description', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

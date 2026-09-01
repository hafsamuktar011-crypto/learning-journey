
CREATE TABLE IF NOT EXISTS conversations{
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KeyboardEvent,
    role Enumerator('user','assistant') NOT null,
    content TEXT NOT null,
    token_count INT UNSIGNED NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
}
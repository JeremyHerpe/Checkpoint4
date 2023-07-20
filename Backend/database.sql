
-- -----------------------------------------------------
-- Table `users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users`(
  `user_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(255) NOT NULL,
  `user_email` VARCHAR(255) NOT NULL
);


-- -----------------------------------------------------
-- Table `articles`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `articles`(
  `article_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `article_name` VARCHAR(255) NOT NULL,
  `article_description` VARCHAR(255) NOT NULL,
  `article_price` INT NOT NULL
);

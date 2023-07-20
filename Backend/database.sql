
-- -----------------------------------------------------
-- Table `posters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `posters`(
  `poster_id` INT NOT NULL AUTO_INCREMENT,
  `poster_text` TEXT,
  `poster_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `id_color` INT NOT NULL,
  PRIMARY KEY (`poster_id`),
  FOREIGN KEY (`id_color`) REFERENCES `colors`(`color_id`));


-- -----------------------------------------------------
-- Table `colors`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `colors`(
  `color_id` INT NOT NULL AUTO_INCREMENT,
  `color_name` VARCHAR(30) NOT NULL,
  `color_code` VARCHAR(30) NOT NULL,
  PRIMARY KEY (`color_id`));

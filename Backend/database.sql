-- -----------------------------------------------------

-- Table `users`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `users`(
        `user_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `user_name` VARCHAR(255) NOT NULL,
        `user_email` VARCHAR(255) NOT NULL,
        `magical_password` VARCHAR(255),
    );

-- -----------------------------------------------------

-- Table `articles`

-- -----------------------------------------------------

CREATE TABLE
    IF NOT EXISTS `articles`(
        `article_id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        `article_name` VARCHAR(255) NOT NULL,
        `article_description` VARCHAR(255) NOT NULL,
        `article_picture` VARCHAR(255) NOT NULL,
        `article_price` INT NOT NULL
    );

INSERT INTO
    users (user_name, user_email)
VALUES ('Grog', 'grog@bagar.com');

INSERT INTO
    articles (
        article_name,
        article_description,
        article_picture,
        article_price
    )
VALUES (
        'Epée soluble',
        'Une épée enchantée à l utilité relativement contextuelle.',
        'https://media.sketchfab.com/models/97157047ffd04cabb80596c99eee4f52/thumbnails/4c945f1b1a73400ebf57c63aeb8d794e/5611e05d40124dd2a97836e9030c3439.jpeg',
        50
    ), (
        'Baton magique de destruction facile',
        'Le fameux Magic Staff of Doom, complètement pété. Attention, article bruyant à conserver hors de portée des enfants et des personnes fragiles de l audition.',
        'https://thegamescabin.com/wp-content/uploads/2021/10/musket-of-unseen-power.png',
        100
    ), (
        'Hache Nerf',
        'Le cadeau idéal pour le gamin à Noel, la hache Nerf lui promet des heures de fun et le respect de ses petits camarades dans la cours de récré.',
        'https://i.ebayimg.com/images/g/kJUAAOSwx-9iqUBg/s-l1600.jpg',
        30
    ), (
        'Parchemin de protection magique',
        'Brandissez ce parchemin pour contrer tout sortilège et mauvais buff de manière élégante et imparable.',
        'https://ih1.redbubble.net/image.1379685105.1268/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
        20
    );